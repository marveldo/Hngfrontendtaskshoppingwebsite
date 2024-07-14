import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { Productreducer, CartReducer } from "./reducers";

const allreducers = combineReducers({
    Products : Productreducer,
    Cartitems : CartReducer
})

export const store = configureStore({
    reducer : allreducers
})
