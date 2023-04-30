import Modal from "../../components/Modal/Modal";
import {useNavigate} from "react-router-dom";
import IngridientDetails from "../../components/IngridientDetails/IngridientDetails";
import {useEffect} from "react";
import {getIngridients} from "../../services/actions/Ingridients";
import {WS_CLOSE_ORDERS_SOCKET, WS_CONNECTION_START} from "../../services/action-types/wsActionTypes";
import {getIngridientDetails} from "../../services/actions/IngridientsDetails";
import { useDispatch } from "../../services/hooks/hooks";

export const IngridientDetailsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getIngridients())
    }, [dispatch])
    return (
                <IngridientDetails />
    )
}