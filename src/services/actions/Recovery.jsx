import {forgotPasswordAPI, resetPasswordAPI} from "../../utils/Api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED'

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

export const resetPassword = (password, token) => {
    return function dispatch(dispatch){
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })
        resetPasswordAPI(password, token)
        .then(data => {
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                message: data.message
            })
        })
        .catch(() => {
            dispatch({
                type: RESET_PASSWORD_FAILED
            })
        })
    }
}