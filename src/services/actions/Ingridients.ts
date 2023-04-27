import {getIngridientsAPI} from "../../utils/Api";
import {TIngridient} from "../types/data";
import {AppDispatch, AppThunk} from "../types";
export const INGRIDIENTS_REQUEST: 'INGRIDIENTS_REQUEST' = 'INGRIDIENTS_REQUEST';
export const INGRIDIENTS_FAILED: 'INGRIDIENTS_FAILED' = 'INGRIDIENTS_FAILED';
export const INGRIDIENTS_SUCCESS: 'INGRIDIENTS_SUCCESS' = 'INGRIDIENTS_SUCCESS';

export interface IIngridientRequest {
    readonly type: typeof INGRIDIENTS_REQUEST;
}

export interface IIngridientSuccess {
    readonly type: typeof INGRIDIENTS_SUCCESS;
    ingridients: TIngridient[]
}

export interface IIngridientFailed {
    readonly type: typeof INGRIDIENTS_FAILED;
}

export type TIngrdieintsActions =
    | IIngridientRequest
    | IIngridientSuccess
    | IIngridientFailed;

export const getIngridients: AppThunk = () => {
    return function (dispatch: AppDispatch) {
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
