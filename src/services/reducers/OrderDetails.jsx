import {ORDER_CLOSE, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS} from "../actions/OrderDetails";


const initialState = {
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    orderDetailsNumber: null
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REQUEST: {
            return {
                ...state,
                orderDetailsRequest: true,
                orderDetailsFailed: false
            }
        }
        case ORDER_SUCCESS: {
            return {
                ...state,
                orderDetailsRequest: false,
                orderDetailsFailed: false,
                orderDetailsNumber: action.orderDetailsNumber
            }
        }
        case ORDER_FAILED: {
            return {
                ...state,
                orderDetailsRequest: false,
                orderDetailsFailed: true
            }
        }
        case ORDER_CLOSE: {
            return {
                ...state,
                orderDetailsNumber: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }
        }
        default: {
            return state
        }
    }
}