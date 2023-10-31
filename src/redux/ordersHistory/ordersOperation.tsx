import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

// GET @ / orderAll
export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (owner: object, thunkAPI) => {
    console.log(owner)
    try {
      const res = await axios.get(`${BASE_URL}/orders`, owner);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ / order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (values: object, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/orders`, values);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
