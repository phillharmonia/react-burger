import {
    WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS_DATA
} from "../action-types/wsActionTypes";

const initialState = {
    wsConnected: false,
    total: 0,
    totalToday: 0,
    orders: [],

}
export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true
            }
        }
    case WS_CONNECTION_CLOSED: {
        return {
            ...state,
            wsConnected: false,
        }
    }
    case WS_GET_ORDERS_DATA: {
        return {
            ...state,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday
        }
    }
    case WS_CONNECTION_ERROR: {
        return {
            ...state,
            wsConnected: false,
        }
    }
    default: {
        return state
    }
    }
}