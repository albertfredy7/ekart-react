import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],// holds more than one item
    reducers:{
        //logic to add items to the cart
        addToCart: (state,action)=>{
            state.push(action.payload)
        },
        //logic to remove items from the cart
        removeFromCart: (state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },
        emptyCart: (state)=>{
            return state = []
        }

    }
    
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer