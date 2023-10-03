import axios from "axios";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

export const getProductsByCategories = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/category/${id}`);
  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  console.log(productData);
  return await axios.post(`${BASE_URL}/products`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
