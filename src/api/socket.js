import { io } from "socket.io-client";

const initSocket = () => {
  const socket = io("http://localhost:8081", {
    transports: ["websocket", "polling"],
    withCredentials: true,
    auth: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndpYnVjYXRlQGdtYWlsLmNvbSIsImlkIjoiMDljNDEwMjEtYzZiNS00NDBkLTg4OTMtNjdlNjEzMzJmMzkwIiwiaWF0IjoxNzQ1NTgzMTc4LCJleHAiOjE3NDU4ODMxNzh9.1oIhutIkb0tqRdT6YjGgpbBIWSk8S4JmpLhTBysPouE",
    },
    reconnectionAttempts: 5,
    timeout: 2000,
  });

  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
  });

  return socket;
};

export { initSocket };
