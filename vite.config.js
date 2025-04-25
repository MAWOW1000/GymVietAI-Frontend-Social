import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,
      },
      "/socket.io": {
        target: "http://localhost:8081",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/socket.io/, "/socket.io"),
      },
    },
  },
});
