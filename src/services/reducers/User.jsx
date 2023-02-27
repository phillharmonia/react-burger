import {FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS} from "../actions/User";

const initialState = {
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
    forgotPasswordSuccess: false,
    message: '',
    user: {
        email: ''
    }
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordFailed: false,
                forgotPasswordSuccess: false
            }
        }
    case FORGOT_PASSWORD_SUCCESS: {
        return {
            ...state,
            user: {
                ...state.user,
                email: ''
            },
            message: action.message,
            forgotPasswordSuccess: true,
            forgotPasswordRequest: false,
            forgotPasswordFailed: false,
        }
    }
    case FORGOT_PASSWORD_FAILED: {
        return {
            ...state,
            forgotPasswordRequest: false,
            forgotPasswordFailed: true,
            forgotPasswordSuccess: false,
        }
    }
        default: {
            return state
        }
    }
}