import axios from 'axios';

const BASE_URL = 'https://sweet-paradise-api.onrender.com'

export const getProductsByCategories = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/products/category/${id}`);
  return response.data;
};


export const createProduct = async (values: any) => {
  const response = await axios.post(`${BASE_URL}/products/`, values);
  return response.data;
};