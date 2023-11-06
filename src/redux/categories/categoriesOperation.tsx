import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

// GET @ / categoriesAll
export const getAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/categories`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
