import axios from "axios";
import { BASE_API_URL } from "../config/api";

export const getProducts = () => {
  return axios.get(`${BASE_API_URL}/products`);
};
export const getProductById = (id) => {
  return axios.get(`${BASE_API_URL}/products/${id}`);
};

export const purchaseProducts = (productIds) => {
  return axios.post(`${BASE_API_URL}/products/purchase`, { productIds });
};
