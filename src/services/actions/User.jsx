import {loginAPI, registerAPI} from "../../utils/Api";
import {setCookie} from "../../utils/Cookie";

export const REGISTER_FORM_REQUEST = 'REGISTER_FORM_REQUEST';
export const REGISTER_FORM_SUCCESS = 'REGISTER_FORM_SUCCESS';
export const REGISTER_FORM_FAILED = 'REGISTER_FORM_FAILED';

export const LOGIN_FORM_REQUEST = 'LOGIN_FORM_REQUEST';
export const LOGIN_FORM_SUCCESS = 'LOGIN_FORM_SUCCESS'
export const LOGIN_FORM_FAILED = 'LOGIN_FORM_FAILED'

export const register = (email, password, name) => {
    return function dispatch(dispatch) {
        dispatch({
            type: REGISTER_FORM_REQUEST
        })
        registerAPI(email, password, name)
        .then(data => {
            setCookie("accessToken", data.accessToken.split("Bearer ")[1])
            setCookie("refreshToken", data.refreshToken)
            dispatch({
                type: REGISTER_FORM_SUCCESS,
                user: data.user
            })
        })
        .catch(() => {
            dispatch({
            type: REGISTER_FORM_FAILED
                })
        })
    }
}
export const login = (email, password) => {
    return function dispatch(dispatch) {
        dispatch({
            type: LOGIN_FORM_REQUEST
        })
        loginAPI(email, password)
        .then(data => {
            setCookie("accessToken", data.accessToken.split("Bearer ")[1])
            setCookie("refreshToken", data.refreshToken)
            dispatch({
                type: LOGIN_FORM_SUCCESS,
                user: data.user
            })
        })
        .catch(() => {
            dispatch({
                type: LOGIN_FORM_FAILED
            })
        })
    }
}
