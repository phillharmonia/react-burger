import {getOrderAPI} from "../../utils/Api";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const ORDER_CLOSE = 'ORDER_CLOSE';

export const getOrder = (order) => {
    return function (dispatch) {
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