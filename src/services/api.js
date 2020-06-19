import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3935",
});

export default api;
