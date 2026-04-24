import { create } from "zustand";
import axios from "axios";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (data: { username: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  loading: false,
  error: null,

  login: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      const token = res.data.accessToken;

      localStorage.setItem("token", token);

      set({
        token,
        loading: false,
      });

      return true;
    } catch (err: any) {
      console.log("ERROR:", err.response?.data);

      set({
        error: err?.response?.data?.message || "Login failed",
        loading: false,
      });

      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cart-storage");
    set({ token: null });
  },
}));