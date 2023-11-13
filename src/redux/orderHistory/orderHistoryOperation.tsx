import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://sweet-paradise-api.onrender.com";

export const getAllOrders = createAsyncThunk(
  "orderHistory/getAllOrders",
  async ({ ownerId, limit }: { ownerId: string; limit: number }, thunkAPI) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/orders/${ownerId}?limit=${limit}`
      );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
