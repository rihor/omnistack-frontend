import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-api.herokuapp.com"
});

export default api;
