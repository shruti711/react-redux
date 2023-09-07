// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './Counter';
import AuthReducer from './Auth';
import uiSliceReducer from './UISlice';
import cardReducer from './CardSlice';

// ***************************************************************************************** //
// const counterReducer = (state = initialState, action) => {

//     if(action.type === 'increment') {

//         // We should not update state directly in redux. It can have unwanted side effect in bigger applications
//         // State should be mutable in redux
//         // state.counter++; // It will work but not a right way
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }
// const store = createStore(counterReducer);
// ****************************************************************************************//


const store = configureStore({
    reducer: { counter: CounterReducer, auth: AuthReducer, ui: uiSliceReducer, cart:cardReducer}
});

// Important: We only have to create one store in a project
export default store;