import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTION_DOMAIN,
});

export default server;
