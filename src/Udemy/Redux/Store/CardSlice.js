import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCard(state, action){
            // payload: which redux sets for us and it contains any extra data that we added to the actions
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                // normally push will change the existing state but in redux it is maintained internally that
                // state can not be changed.
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCard(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            } else {
                // remove the quantity of item
                existingItem.quantity--;
                // remove the quantity as well as price from the card
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const CardActions =  cardSlice.actions;

export default cardSlice.reducer;