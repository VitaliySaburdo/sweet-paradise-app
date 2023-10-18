import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      const { _id } = action.payload;
      const existingOrder = state.orders.find((order) => order._id === _id);
      if (existingOrder) {
        existingOrder.quantity += 1;
        existingOrder.totalPrice = existingOrder.quantity * existingOrder.price;
      } else {
        state.orders.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter((order) => order._id !== action.payload);
    },
    increment: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((order) => order._id === action.payload);
      if (order) {
        order.quantity += 1;
        order.totalPrice = order.quantity * order.price;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((order) => order._id === action.payload);
      if (order) {
        order.quantity = order.quantity - 1 < 1 ? 1 : order.quantity - 1;
        order.totalPrice = order.quantity * order.price;
      }
    },
    changeValue: (state, action: PayloadAction<{ id: string; value: number }>) => {
      const { id, value } = action.payload;
      const order = state.orders.find((order) => order._id === id);
      if (order) {
        order.quantity = value;
        order.totalPrice = value * order.price;
      }
    },
  },
});

export const { addOrder, deleteOrder, increment, decrement, changeValue } = ordersSlice.actions;
export default ordersSlice.reducer;