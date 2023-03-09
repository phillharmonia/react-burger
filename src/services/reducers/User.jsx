import {
    REGISTER_FORM_REQUEST,
    REGISTER_FORM_SUCCESS,
    REGISTER_FORM_FAILED,

    LOGIN_FORM_REQUEST,
    LOGIN_FORM_FAILED,
    LOGIN_FORM_SUCCESS,

    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILED,

    PATCH_PROFILE_REQUEST,
    PATCH_PROFILE_SUCCESS,
    PATCH_PROFILE_FAILED
} from "../actions/User";


const initialState = {
    user: {
        name: '',
        email: ''
     },
    registerRequest: false,
    registerFailed: false,
    registerSuccess: true,

    loginRequest: false,
    loginFailed: false,
    loginSuccess: false,

    getProfileRequest: false,
    getProfileFailed: false,

    patchProfileRequest: false,
    patchProfileSuccess: false,
    patchProfileFailed: false
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
    case GET_PROFILE_REQUEST: {
        return {
            ...state,
            getProfileRequest: true,
            getProfileFailed: false,
        }
    }
    case GET_PROFILE_SUCCESS: {
        return {
            ...state,
            getProfileRequest: false,
            getProfileFailed: false,
            user: action.user
        }
    }
    case GET_PROFILE_FAILED: {
        return {
            ...state,
            getProfileFailed: true,
            getProfileRequest: false
        }
    }
        case PATCH_PROFILE_REQUEST: {
            return {
                ...state,
                patchProfileRequest: true,
                patchProfileFailed: false,
            }
        }
        case PATCH_PROFILE_SUCCESS: {
            return {
                ...state,
                patchProfileRequest: false,
                patchProfileFailed: false,
                user: action.user
            }
        }
        case PATCH_PROFILE_FAILED: {
            return {
                ...state,
                patchProfileFailed: true,
                patchProfileRequest: false
            }
        }
    default: {
        return state
    }
    }
}