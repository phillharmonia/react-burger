import {INGRIDIENTS_SUCCESS, INGRIDIENTS_REQUEST, INGRIDIENTS_FAILED} from "../actions/Ingridients";


const initialState = {
    ingridients: [],
    ingridientsFailed: false,
    ingridientsRequest: false
}
export const ingridientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case INGRIDIENTS_REQUEST: {
            return {
                ...state,
                ingridientsRequest: true,
                ingridientsFailed: false
            }
        }
        case INGRIDIENTS_SUCCESS: {
            return {
                ...state,
                ingridientsRequest: false,
                ingridientsFailed: false,
                ingridients: action.ingridients
            }
        }
        case INGRIDIENTS_FAILED: {
            return {
                ...state,
                ingridientsRequest: false,
                ingridientsFailed: true
            }
        }
        default:
            return state
    }
}