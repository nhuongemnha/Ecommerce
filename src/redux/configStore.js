import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartItemsSlide from "./shopping-cart/cartItemsSlide";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productModalSlice,
  cartItemsSlide,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
