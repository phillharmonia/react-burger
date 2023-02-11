import {ADD_BUN, ADD_INGRIDIENT, DELETE_INGRIDIENT, MOVE_INGRIDIENT} from "../actions/Constructor";

const initialState = {
    ingridients: [],
    bun: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGRIDIENT: {
            return {
                ...state,
                ingridients: [...state.ingridients, action.data]
            }
        }
        case ADD_BUN: {
            return {
                ...state,
                bun: action.data
            }
        }
        case MOVE_INGRIDIENT: {
            return {
                ...state,
                ingridients: action.sort
            }
        }
        case DELETE_INGRIDIENT: {
            return {
                ...state,
                ingridients: [...state.ingridients].filter(item => item.uuid !== action.uuid)
            }
        }
        default:
            return state;
    }
}