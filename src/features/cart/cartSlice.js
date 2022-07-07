import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



const url = 'https://course-api.com/react-useReducer-cart-project';

// export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
// return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_,thunkApi) => {
    try {
        const res = await axios(url);
        return res.data

    } catch (error) {
        return thunkApi.rejectWithValue('somting went rong')
    }
    });

const initialState ={
    cartItems:[],
    amount:4,
    total:0,
    isLodaing:false
}

const cartSlice = createSlice({
    name:"cart",

    initialState,

    reducers:{
        clearCart:(state)=>{
            state.cartItems =[];
        },
        removeItem:(state ,action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=> item.id !== itemId);
        },
        increase:(state , {payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id);
            cartItem.amount = cartItem.amount +1;
        },
        decrease:(state , {payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id);
            cartItem.amount = cartItem.amount -1;
        },
        calculateTotals:(state)=>{
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price;
            });

            state.amount = amount;
            state.total = total;
        }
    }

    ,
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLodaing = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload
                state.isLodaing = false;
        },
        [getCartItems.rejected]: (state) => {
            state.isLodaing = false;
        },
        }


})
export const {clearCart,removeItem ,increase ,decrease ,calculateTotals} = cartSlice.actions
export default cartSlice.reducer;

