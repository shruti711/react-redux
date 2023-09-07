import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

// To get hold of this different actions identifier which is in createSlice need to use ounterSlice.actions
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;