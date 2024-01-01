import axios, { AxiosInstance } from "axios";
import api_routes from "./api_routes";

const API: AxiosInstance = axios.create({
  baseURL: api_routes.BASE_URL,
  timeout: 10000,
});

export default API;
