import {getProfileAPI, loginAPI, patchProfileAPI, registerAPI, logoutAPI, updateTokenAPI,} from "../../utils/Api";
import {setCookie, deleteCookie, getCookie} from "../../utils/Cookie";
import { AppDispatch } from "../types";
import { TUser } from "../types/data";

export type TUserActions = 
 | ILoginRequest
 | ILoginSuccess
 | ILoginFailed
 ;

export const REGISTER_FORM_REQUEST = 'REGISTER_FORM_REQUEST';
export const REGISTER_FORM_SUCCESS = 'REGISTER_FORM_SUCCESS';
export const REGISTER_FORM_FAILED = 'REGISTER_FORM_FAILED';

export const LOGIN_FORM_REQUEST: 'LOGIN_FORM_REQUEST' = 'LOGIN_FORM_REQUEST';
export const LOGIN_FORM_SUCCESS: 'LOGIN_FORM_SUCCESS' = 'LOGIN_FORM_SUCCESS'
export const LOGIN_FORM_FAILED: 'LOGIN_FORM_FAILED' = 'LOGIN_FORM_FAILED'

interface ILoginRequest {
    readonly type: typeof LOGIN_FORM_REQUEST;
}

interface ILoginSuccess {
    readonly type: typeof LOGIN_FORM_SUCCESS;
    user: TUser
}

interface ILoginFailed {
    readonly type: typeof LOGIN_FORM_FAILED;
}

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED'

export const PATCH_PROFILE_REQUEST = 'PATCH_PROFILE_REQUEST'
export const PATCH_PROFILE_SUCCESS = 'PATCH_PROFILE_SUCCESS'
export const PATCH_PROFILE_FAILED = 'PATCH_PROFILE_FAILED'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'


export const register = (email: string, password: string, name: string) => {
    return function dispatch(dispatch: AppDispatch) {
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
export const login = (email: string, password: string) => {
    return function dispatch(dispatch: AppDispatch) {
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
export const getProfile = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_PROFILE_REQUEST
        })
        getProfileAPI()
            .then((data) => {
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    user: data.user
                })
            })
             .catch((error) => {
                 if(error) {
                     const refreshToken = getCookie("refreshToken")
                    updateTokenAPI(refreshToken)
                    .then(() => dispatch(getProfile()))
                }
                else {
                    dispatch({
                        type: GET_PROFILE_FAILED
                    })
                }
             })
    }
}
export const patchProfile = (email: string, name: string, password: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: PATCH_PROFILE_REQUEST
        })
        patchProfileAPI(email, name, password)
            .then((data) => {
                dispatch({
                    type: PATCH_PROFILE_SUCCESS,
                    user: data.user
                })
            })
             .catch((error) => {
                 if(error) {
                     const refreshToken = getCookie("refreshToken")
                    updateTokenAPI(refreshToken)
                    .then(() => dispatch(patchProfile(email, name, password)))
                }
                else {
                    dispatch({
                        type: PATCH_PROFILE_FAILED
                    })
                }
             })
    }
}
export const logout = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: LOGOUT_REQUEST
        })
        logoutAPI(getCookie("refreshToken")).then(() => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
            deleteCookie('accessToken');
            deleteCookie('refreshToken');
        })
            .catch(() => {
                dispatch({
                    type: LOGOUT_FAILED
                })
            })
    }
}