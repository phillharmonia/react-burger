import {getCookie} from "../../utils/Cookie";
import {updateTokenAPI} from "../../utils/Api";

export const socketMiddleware = (wsUrl, wsActions) => {
    return store => {
        let socket = null;
        let userSocket = null
        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage, wsInitUser,onOpenUser, close, closeUser, onCloseUser, onErrorUser, onMessageUser } = wsActions;
            if (type === wsInit) {
                socket = new WebSocket(`${wsUrl}/all`);
            }
            if (type === wsInitUser) {
                userSocket = new WebSocket(`${wsUrl}?token=${getCookie("accessToken")}`);
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;

                    dispatch({ type: onMessage, payload: restParsedData });
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };

            }
            if (userSocket) {
                userSocket.onopen = event => {
                    dispatch({ type: onOpenUser, payload: event });
                };

                userSocket.onerror = event => {
                    dispatch({ type: onErrorUser, payload: event });
                };
                userSocket.onmessage = event => {
                    const message = JSON.parse(event.data);
                    if (message.success) {
                        dispatch({type: onMessageUser, payload: message})
                    }
                    else {
                        updateTokenAPI(getCookie("refreshToken"))
                            .then(() => {
                                dispatch({ type: wsInitUser} )
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                }
                userSocket.onclose = event => {
                    dispatch({type: onCloseUser, payload: event})
                }
            }
            if (type === close) {
                socket.close();
            }

            if (type === closeUser) {
                userSocket.close();
            }
            next(action);
        };
    };
};