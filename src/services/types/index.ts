import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store/store";
import { TConstructorActions } from "../actions/Constructor";
import { TIngrdieintsActions } from "../actions/Ingridients";
import { TUserActions } from "../actions/User";
import { TIngridientDetailsActions } from "../actions/IngridientsDetails";
import { TOrderActions } from "../actions/OrderDetails";
import { TRecoveryActions } from "../actions/Recovery";
import { TWebSocketActions } from "../actions/wsActions";

type TApplicationActions =
     TConstructorActions
    | TIngrdieintsActions
    | TUserActions
    | TIngridientDetailsActions
    | TOrderActions
    | TRecoveryActions
    | TWebSocketActions;
    

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>>
export type AppDispatch = typeof store.dispatch; 