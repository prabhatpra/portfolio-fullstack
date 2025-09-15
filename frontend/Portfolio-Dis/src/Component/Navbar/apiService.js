// src/services/apiService.js
import axios from "axios";

const BASE_URL = "http://localhost:9090/user";

export const registerUser = async (userData) => {
  // userData ka format hoga:
  // { userName: "", email: "", password: "", confirmPassword: "" }
  return await axios.post(`${BASE_URL}/register`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginUser = async (loginData) => {
  // loginData ka format hoga:
  // { userName: "", password: "" }
  return await axios.post(`${BASE_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
