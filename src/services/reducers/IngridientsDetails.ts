import {OPEN_INGRIDIENT_SUCCESS, OPEN_INGRIDIENT_REQUEST, CLOSE_INGRIDIENT, TIngridientDetailsActions} from "../actions/IngridientsDetails";
import { TIngridient } from "../types/data";

export type TIngridientDetailsState = {
    ingridient: TIngridient | null,
    openIngridientRequest: boolean,
    openIngridientFailed: boolean
}
const initialState = {
    ingridient: null,
    openIngridientRequest: false,
    openIngridientFailed: false
}

export const ingridientsDetailsReducer = (state = initialState, action: TIngridientDetailsActions): TIngridientDetailsState => {
    switch (action.type) {
        case OPEN_INGRIDIENT_REQUEST:
            return {
                ...state,
                openIngridientRequest: true,
                openIngridientFailed: false
            }
        case OPEN_INGRIDIENT_SUCCESS:
            return {
                ...state,
                openIngridientRequest: false,
                openIngridientFailed: false,
                ingridient: action.ingridient
            }
        case CLOSE_INGRIDIENT:
            return {
                ...state,
                ingridient: null,
                openIngridientRequest: false,
                openIngridientFailed: false
            }

        default:
            return state
    }
}