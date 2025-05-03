import { io } from "socket.io-client";

const initSocket = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("No token found");
    return null;
  }

  const socket = io("http://localhost:8081", {
    transports: ["websocket", "polling"],
    withCredentials: true,
    auth: { token },
    reconnectionAttempts: 5,
    timeout: 2000,
  });

  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
    if (err.message.includes("Invalid token")) {
      console.log("Invalid token, please check authentication");
    }
  });

  return socket;
};

export { initSocket };
