import { combineReducers } from "redux";
import {ingridientsReducer} from "../reducers/Ingridients";
import {ingridientsDetailsReducer} from "../reducers/IngridientsDetails"
import {constructorReducer} from "../reducers/Constructor";
import {orderReducer} from "../reducers/OrderDetails";
import {recoveryReducer} from "../reducers/Recovery";

export const rootReducer = combineReducers({
    ingridients: ingridientsReducer,
    ingridientDetails: ingridientsDetailsReducer,
    ingridientsConstructor: constructorReducer,
    orderDetails: orderReducer,
    recovery: recoveryReducer
})