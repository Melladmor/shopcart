import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import modalSlice from "../features/cart/modalSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        modal:modalSlice
    }
});

export default store;