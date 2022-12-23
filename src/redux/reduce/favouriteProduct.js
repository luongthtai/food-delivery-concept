import { createSlice } from "@reduxjs/toolkit";

export const favouriteProduct = createSlice({
    name: "favourite",
    initialState: {
        product: []
    },
    reducers: {
        addFavourite: (state, action) => {
            state.product.push(action.payload)
        }
    }
})

export const {addFavourite} = favouriteProduct.actions

export default favouriteProduct.reducer