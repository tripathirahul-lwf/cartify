export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  accessToken: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}