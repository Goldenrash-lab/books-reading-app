import axios from "axios";

export const api = axios.create({
  baseURL: "https://bookread-backend.goit.global/",
});
