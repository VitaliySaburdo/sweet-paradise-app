import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = "https://sweet-paradise-api.onrender.com";

// GET @ / productsAll
export const getProductsAll = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /contactsByCategories
export const getProductsByCategories = createAsyncThunk(
  'products/fetchProductsByCategories',
  async ( productId: string , thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/category/${productId}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ / addProduct
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData: string, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/products`, productData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ / deleteProduct
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId: string, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${productId}` );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);