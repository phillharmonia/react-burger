import { combineReducers } from "redux";
import {ingridientsReducer} from "../reducers/Ingridients";

export const rootReducer = combineReducers({
    ingridients: ingridientsReducer
})