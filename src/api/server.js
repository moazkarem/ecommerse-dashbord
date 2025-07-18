import axios from "axios";

const server = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://backende-gold.vercel.app",
});

export default server;
