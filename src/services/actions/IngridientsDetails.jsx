export const OPEN_INGRIDIENT_REQUEST = 'OPEN_INGRIDIENT_REQUEST';
export const OPEN_INGRIDIENT_SUCCESS = 'OPEN_INGRIDIENT_SUCCESS';
export const CLOSE_INGRIDIENT = 'CLOSE_INGRIDIENT';

export const getIngridientDetails = (ingridient) => {
    return function (dispatch) {
        dispatch({type: OPEN_INGRIDIENT_REQUEST})
        dispatch({
            type: OPEN_INGRIDIENT_SUCCESS,
            ingridient: ingridient
        })
    }
}
export const closeIngridientDetails = () => {
    return {
        type: CLOSE_INGRIDIENT
    }
}