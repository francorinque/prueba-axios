import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../Reducers/User/userSlice";
import cartReducer from "../../Reducers/Cart/CartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
