import {WS_CONNECTION_CLOSED, WS_CONNECTION_START} from "../action-types/wsActionTypes";
import {getCookie} from "../../utils/Cookie";

export const wsConnectionOpen = () => {
    return {
        type: WS_CONNECTION_START,
        payload: "/all"
    }
}
export const wsConnectionClose = () => {
    return {
        type: WS_CONNECTION_CLOSED,
    }
}
export const wsConnectionOpenUser = () => {
    return {
        type: WS_CONNECTION_START,
        payload: `?token=${getCookie("accessToken")}`
    }
}