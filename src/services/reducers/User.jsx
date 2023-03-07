import {
    REGISTER_FORM_REQUEST,
    REGISTER_FORM_SUCCESS,
    REGISTER_FORM_FAILED,

    LOGIN_FORM_REQUEST,
    LOGIN_FORM_FAILED,
    LOGIN_FORM_SUCCESS
} from "../actions/User";


const initialState = {
    user: null,

    registerRequest: false,
    registerFailed: false,
    registerSuccess: true,

    loginRequest: false,
    loginFailed: false,
    loginSuccess: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_FORM_REQUEST: {
            return {
                ...state,
                registerFailed: false,
                registerRequest: true,
                registerSuccess: false
            }
        }
    case REGISTER_FORM_SUCCESS: {
        return {
            ...state,
            user: action.user,
            registerFailed: false,
            registerRequest: false,
            registerSuccess: true
        }
    }
    case REGISTER_FORM_FAILED: {
        return {
            ...state,
            registerFailed: true,
            registerRequest: false,
            registerSuccess: false
        }
    }
    case LOGIN_FORM_REQUEST: {
        return {
            ...state,
            loginFailed: false,
            loginRequest: true,
            loginSuccess: false
        }
    }
    case LOGIN_FORM_SUCCESS: {
        return {
            ...state,
            loginFailed: false,
            loginRequest: false,
            loginSuccess: true,
            user: action.user
        }
    }
    case LOGIN_FORM_FAILED: {
        return {
            ...state,
            loginFailed: true,
            loginRequest: false,
            loginSuccess: false
        }
    }
    default: {
        return state
    }
    }
}