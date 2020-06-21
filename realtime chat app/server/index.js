const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Use socket.io to know user connected or diconnected
io.on("connection", (socket) => {
  console.log("We have a new connection!!");

  socket.on("disconnect", () => {
    console.log("User has Left!");
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
