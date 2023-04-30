import {getOrderAPI} from "../../utils/Api";
import { AppDispatch } from "../types";

export const ORDER_REQUEST: 'ORDER_REQUEST' = 'ORDER_REQUEST';
export const ORDER_SUCCESS: 'ORDER_SUCCESS' = 'ORDER_SUCCESS';
export const ORDER_FAILED: 'ORDER_FAILED' = 'ORDER_FAILED';
export const ORDER_CLOSE: 'ORDER_CLOSE' = 'ORDER_CLOSE';

export interface IOrderRequest {
    readonly type: typeof ORDER_REQUEST
}
export interface IOrderSuccess {
    readonly type: typeof ORDER_SUCCESS
    orderDetailsNumber: number;
}
export interface IOrderFailed {
    readonly type: typeof ORDER_FAILED
}
export interface IOrderClose {
    readonly type: typeof ORDER_CLOSE
}
export type TOrderActions = 
     | IOrderRequest
     | IOrderSuccess
     | IOrderFailed
     | IOrderClose;

export const getOrder = (order: string[]) => {
    return function (dispatch: AppDispatch) {
        dispatch({type: ORDER_REQUEST})

        getOrderAPI(order)
            .then((data) => {
                dispatch({
                    type: ORDER_SUCCESS,
                    orderDetailsNumber: data.order.number
                })
            })
            .catch((err) => {
                console.log(err)
            dispatch({
                type: ORDER_FAILED
            })
        })
    }
}