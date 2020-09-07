import {createSlice} from '@reduxjs/toolkit'
export const initialState = {
    shoppingcart: []
  }

const shoppingcartSlice = createSlice({
    name: 'shoppingcart',
    initialState,
    reducers: {
        getShoppingcart: (state) => state.shoppingcart, 
        // state, action de la que cojo el payload
        addShoppingcart: (state, {payload}) => {
            state.shoppingcart = state.shoppingcart.push(payload); 
            return [...state.shoppingcart];
        }
    }
    
})


// Selector
export const shoppingcartSelector = (state) => state.shoppingcart;
// actions generated from slice
export const {getShoppingcart, addShoppingcart} = shoppingcartSlice.actions;
//reducer
export default shoppingcartSlice.reducer;