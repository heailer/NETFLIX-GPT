import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./storeSlices/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
