import axios from "axios";

const api = axios.create({
  baseURL: "https://semanaomnistack0.herokuapp.com"
});

export default api;
