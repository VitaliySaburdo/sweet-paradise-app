import axios from "axios";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

export const getProductsByCategories = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/category/${id}`);
  return response.data;
};

export const createProduct = async (productData: any) => {
  return await axios.post(`${BASE_URL}/products`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProduct = async (id: string) => {
  return await axios.delete(`${BASE_URL}/products/${id}`);
};

export const createOrder = async (values: object) => {
  console.log(values);
  const response = await axios.post(`${BASE_URL}/orders`, values);
  return response.data;
};
