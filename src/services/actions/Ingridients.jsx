import { getIngridientsAPI } from "../../utils/Api";

export const INGRIDIENTS_REQUEST = 'INGRIDIENTS_REQUEST';
export const INGRIDIENTS_FAILED = 'INGRIDIENTS_FAILED';
export const INGRIDIENTS_SUCCESS = 'INGRIDIENTS_SUCCESS';

export const getIngridients = () => {
    return function (dispatch) {
        dispatch({
            type: INGRIDIENTS_REQUEST
        });
        getIngridientsAPI()
            .then((data) => {
                dispatch({
                    type: INGRIDIENTS_SUCCESS,
                    ingridients: data.data
                })
            })
            .catch(() => {
                dispatch({
                    type: INGRIDIENTS_FAILED
                });
            })
    }
}
