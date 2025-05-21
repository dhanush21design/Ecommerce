import { configureStore } from "@reduxjs/toolkit"
import Cartsl from '../tool/Cartslice'
export const store = configureStore({
    reducer :{
        cart : Cartsl
    },
    devTools:true
})