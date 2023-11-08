import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { productsReducer } from "./product/productsSlice";
import { ordersReducer } from "./orders/ordersSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { orderHistoryReducer } from "./orderHistory/OrderHistorySlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productsReducer,
  orders: ordersReducer,
  categories: categoriesReducer,
  orderHistory: orderHistoryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
