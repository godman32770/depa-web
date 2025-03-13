import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/api/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (email: string, password: string) => {
  const response = await api.post("/api/auth/register", { email, password });
  return response.data;
};

export const sendMessage = async (message: string) => {
  const token = localStorage.getItem("token");
  const response = await api.post(
    "/api/chat",
    { message },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};