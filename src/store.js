import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { Productreducer, CartReducer , UserReducer} from "./reducers";

const allreducers = combineReducers({
    Products : Productreducer,
    Cartitems : CartReducer,
    User : UserReducer
})

export const store = configureStore({
    reducer : allreducers
})
