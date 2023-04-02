import { combineReducers } from "redux";
import {ingridientsReducer} from "../reducers/Ingridients";
import {ingridientsDetailsReducer} from "../reducers/IngridientsDetails"
import {constructorReducer} from "../reducers/Constructor";
import {orderReducer} from "../reducers/OrderDetails";
import {recoveryReducer} from "../reducers/Recovery";
import {userReducer} from "../reducers/User";
import {
    WS_CLOSE_ORDERS_SOCKET, WS_CLOSE_USER_ORDERS_SOCKET,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS_DATA,
    WS_SEND_ORDERS,
    WS_USER_CONNECTION_CLOSED, WS_USER_CONNECTION_ERROR,
    WS_USER_CONNECTION_START,
    WS_USER_CONNECTION_SUCCESS, WS_USER_ORDERS_DATA, WS_USER_SEND_ORDERS
} from "../action-types/wsActionTypes";
import {wsReducer} from "../reducers/wsReducer";
import {popupReducer} from "../reducers/Popup";


export const socketTypes = {
    wsInit: WS_CONNECTION_START,
    wsInitUser: WS_USER_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onOpenUser: WS_USER_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onCloseUser: WS_USER_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onErrorUser: WS_USER_CONNECTION_ERROR,
    wsSendOrders: WS_SEND_ORDERS,
    wsSendOrdersUser: WS_USER_SEND_ORDERS,
    onMessage: WS_GET_ORDERS_DATA,
    onMessageUser: WS_USER_ORDERS_DATA,
    close: WS_CLOSE_ORDERS_SOCKET,
    closeUser: WS_CLOSE_USER_ORDERS_SOCKET,
}
export const rootReducer = combineReducers({
    ingridients: ingridientsReducer,
    ingridientDetails: ingridientsDetailsReducer,
    ingridientsConstructor: constructorReducer,
    orderDetails: orderReducer,
    recovery: recoveryReducer,
    user: userReducer,
    order: wsReducer,
    popup: popupReducer
})