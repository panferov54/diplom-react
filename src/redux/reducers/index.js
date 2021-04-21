import {combineReducers} from "redux";


import wheels from "./wheels";
import filters from "./filters";
import cart from "./cart";

const rootReducer = combineReducers({
    filters,
    wheels: wheels,
    cart
})

export default rootReducer;
