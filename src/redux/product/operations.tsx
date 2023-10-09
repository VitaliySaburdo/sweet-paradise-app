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