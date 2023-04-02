import {SET_POPUP_CLOSE, SET_POPUP_ACITVE} from "../actions/Popup";

const initialState = { popup: false };

export const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPUP_ACITVE: {
            return { popup: true };
        }
        case SET_POPUP_CLOSE: {
            return { popup: false };
        }
        default:
            return state;
    }
};