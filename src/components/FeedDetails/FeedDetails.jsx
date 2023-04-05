import styles from '../FeedDetailsInfo/FeedDetailsInfo.module.css'
import React, {useEffect, useMemo} from "react";
import {getIngridients} from "../../services/actions/Ingridients";
import {
    WS_CLOSE_ORDERS_SOCKET, WS_CLOSE_USER_ORDERS_SOCKET,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_START, WS_USER_CONNECTION_START
} from "../../services/action-types/wsActionTypes";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {SET_POPUP_CLOSE} from "../../services/actions/Popup";
import {FeedDetailsInfo} from "../FeedDetailsInfo/FeedDetailsInfo";

export const FeedDetails = () => {
    const closePopup = () => {
        dispatch({type: SET_POPUP_CLOSE})
        location.pathname ===`/feed/${id}` ? navigate("/feed") : navigate("/profile/orders")
    }
    const {popup}= useSelector(store => store.popup)
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    return (
        <>
            {popup ? (
                <Modal closePopup={closePopup}>
                    <FeedDetailsInfo />
                </Modal>
            ) : (
                <>
                    {<FeedDetailsInfo />}
                </>
            )}
        </>
    );
}