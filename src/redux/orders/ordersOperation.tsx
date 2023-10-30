import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

// GET @ / productsAll
export const getAllOrders = createAsyncThunk(
  'orders/fetchAll',
  async (owner: object, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/orders`, owner);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);