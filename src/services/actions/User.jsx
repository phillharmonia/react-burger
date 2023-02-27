import {forgotPasswordAPI} from "../../utils/Api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED'

export const forgotPassword = (email) => {
    return function dispatch(dispatch){
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })
        forgotPasswordAPI(email)
        .then(data => {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS,
                message: data.message
            })
        })
        .catch(() => {
            dispatch({
                type: FORGOT_PASSWORD_FAILED
            })
        })
    }
}