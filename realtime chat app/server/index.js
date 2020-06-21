const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Use socket.io to know user connected or diconnected
io.on("connection", (socket) => {
  console.log("We have a new connection!!");

  socket.on("join", ({ name, room }, callback) => {
    // console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}!`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined!` });
    socket.join(user.room);

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User has Left!");
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
