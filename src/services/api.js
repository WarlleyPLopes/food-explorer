import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-food-4jvr.onrender.com",
})