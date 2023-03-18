import {
    FORGOT_PASSWORD_FAILED,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,

    RESET_PASSWORD_FAILED,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS
} from "../actions/Recovery";

const initialState = {
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
    forgotPasswordSuccess: false,

    resetPasswordRequest: false,
    resetPasswordFailed: false,
    resetPasswordSuccess: false,

    message: '',
    user: null
}

export const recoveryReducer = (state = initialState, action) => {
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
            user: action.user,
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
    case RESET_PASSWORD_REQUEST: {
        return {
            ...state,
            resetPasswordRequest: true,
            resetPasswordFailed: false,
            resetPasswordSuccess: false
        }
    }
   case RESET_PASSWORD_SUCCESS: {
       return {
           ...state,
           resetPasswordRequest: false,
           resetPasswordFailed: false,
           resetPasswordSuccess: true,
       }
   }
    case RESET_PASSWORD_FAILED: {
        return {
            ...state,
            resetPasswordRequest: false,
            resetPasswordSuccess: false,
            resetPasswordFailed: true
        }
    }
        default: {
            return state
        }
    }
}