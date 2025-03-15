import axios from "axios";
import react from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_SEC;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    token: API_TOKEN,
  },
});
export const loginUser = async (data) => {
  try {
    const response = await apiClient.post("/login", {
      phoneNumber: data.username,
      password: data.password,
      ip_address: "891.28392.8392", // Example static value
      dev_model: "iPhone 12",
      sys_version: "iOS 12.1",
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
