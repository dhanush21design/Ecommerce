import {createSlice} from '@reduxjs/toolkit';

const storedItems = localStorage.getItem("cartItems");
const initialState = {
    cartItems:storedItems ? JSON.parse(storedItems) :[]
};


const Cartsl = createSlice({

name:'cart',
initialState,
reducers:{
    addtocart:(state,action) =>{
const newItem = action.payload
const existingItem = state.cartItems.find((item)=>item.id === newItem.id)
if(existingItem){
    existingItem.quantity += newItem.quantity
}else{
    state.cartItems.push({
        id:newItem.id,
        title:newItem.title,
        image:newItem.image,
        ds:newItem.ds,
        price:newItem.price,
        quantity:newItem.quantity
    });
}
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    deleteFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter((items)=> items.id !== action.payload.id)
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    },
    updateQuantity : (state,action)=>{
        const{id,quantity} = action.payload
        const itemToUpdate = state.cartItems.find((items)=>items.id === id)
        if(itemToUpdate){
            itemToUpdate.quantity = quantity
        };
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
    }

}

}
)

export default Cartsl.reducer;
export const{addtocart,deleteFromCart,updateQuantity} = Cartsl.actions
