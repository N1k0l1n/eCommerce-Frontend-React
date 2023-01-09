import { createSlice } from "@reduxjs/toolkit"
import { Basket } from "../../models/basket"

interface BasketState {
    basket: Basket | null
}

const initialState : BasketState = {
    basket : null
}

export const basketSlice = createSlice ({
    name: 'basket',
    initialState,
    reducers:{
        setBasket:(state, action)=>{
            state.basket = action.payload
        },
        removeItem : (state, action) =>{
            const {productId, quanity} = action.payload;
            const itemIndex = state.basket?.items.findIndex(i => i.productId === productId);
            if(itemIndex === -1 || itemIndex === undefined) return;
            state.basket!.items[itemIndex].quantity -=quanity;
            if(state.basket?.items[itemIndex].quantity === 0)
            state.basket.items.slice(itemIndex, 1);
        }
    }
})

export const {setBasket, removeItem} = basketSlice.actions;