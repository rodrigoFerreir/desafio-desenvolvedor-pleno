import axios from "axios";

const uri = "http://localhost:3003";
export const apiService = axios.create({
  baseURL: uri,
  headers: {
    "Content-Type": "application/json"
  },
});