import axios from "axios";
import React from "react";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    token: import.meta.env.VITE_TOKEN,
  },
});

export const registerApi = async (formData) => {
  try {
    const response = await API.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};
