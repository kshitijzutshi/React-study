import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return (
    <div>
      <h1>Chat app</h1>
      <h2>Hello</h2>
    </div>
  );
};

export default Chat;
