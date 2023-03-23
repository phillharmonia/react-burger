import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS_DATA, WS_SEND_ORDERS
} from "../action-types/wsActionTypes";

export const wsConnectionSuccess = () => {
    return {
        type: WS_CONNECTION_SUCCESS
    };
};

export const wsConnectionError = () => {
    return {
        type: WS_CONNECTION_ERROR
    };
};

export const wsConnectionClosed = () => {
    return {
        type: WS_CONNECTION_CLOSED
    };
};

export const wsGetOrders = order => {
    return {
        type: WS_GET_ORDERS_DATA,
        payload: order
    };
};

export const wsSendOrders = order => {
    return {
        type: WS_SEND_ORDERS,
        payload: order
    };
};
