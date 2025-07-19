import axios from "axios";

const server = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  baseURL: import.meta.env.VITE_PRODUCTION_DOMAIN,
});

export default server;
