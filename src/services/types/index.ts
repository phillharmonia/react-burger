import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store/store";
import { TConstructorActions } from "../actions/Constructor";
import { TIngrdieintsActions } from "../actions/Ingridients";

type TApplicationActions =
    | TConstructorActions
    | TIngrdieintsActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>>
export type AppDispatch = typeof store.dispatch; 