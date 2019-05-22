import axios from "axios";

const api = axios.create({
  baseURL: process.env.URL, // pega a variavel do ambiente
});

export default api;
