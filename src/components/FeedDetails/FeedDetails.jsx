import styles from './FeedDetails.module.css'
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
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";
import {FeedDetailsComposition} from "./FeedDetailsComposition/FeedDetailsComposition";
import {SET_POPUP_CLOSE} from "../../services/actions/Popup";

export const FeedDetails = () => {
    const {id} = useParams()
    const {orders} = useSelector(store => store.order)
    const order = orders.find((order) => order._id === id);
    const ingridients = useSelector(store => store.ingridients.ingridients)
    const location = useLocation();
    const dispatch = useDispatch()
    const {popup}= useSelector(store => store.popup)
    const closePopup = () => {
        dispatch({type: SET_POPUP_CLOSE})
        navigate(-1)
    }
    useEffect(() => {
        if (location.pathname === `/feed/${id}` && !order) {
            dispatch({
                type: WS_CONNECTION_START
            })
            return (() => {
                dispatch({
                    type: WS_CLOSE_ORDERS_SOCKET
                })
            })
        }
        if (location.pathname === `/profile/orders/${id}` && !order) {
            dispatch({
                type: WS_USER_CONNECTION_START
            })
            return (() => {
                dispatch({
                    type: WS_CLOSE_USER_ORDERS_SOCKET
                })
            })
        }
    },[dispatch, order])
    const getOrderStatus = (status) => {
        switch (status) {
            case "done":
                return (
                    <p className={`${styles.text} ${styles.status} text text_type_main-default mt-3`}>Готов</p>
                )
            case "created":
                return (
                    <p className={`${styles.text} ${styles.status} text text_type_main-default mt-3`}>Создан</p>
                )
            case "pending":
                return (
                    <p className={`${styles.text} ${styles.status} text text_type_main-default mt-3`}>Готовится</p>
                )
            default:
                return (
                    <p className={`${styles.text} ${styles.status} text text_type_main-default mt-3`}>{status}</p>
                )
        }
    }
    const ingridientsData = useMemo(() => {
        if (!order?.ingredients || !ingridients) {
            return null;
        }
        return order?.ingredients.map((id) =>{
            return ingridients?.find((data) => {
                return id === data._id
            })
        })
    }, [order?.ingredients, ingridients])

    const totalPrice = useMemo(() => {
        return ingridientsData?.reduce((total, item) => {
            if (item?.type === 'bun') {
                return total += item.price * 2
            }
            if(item?.type === 'main' || 'sauce')
                return total += (item ? item.price : 0)
        }, 0)
    })

    const navigate = useNavigate()
    return (
       popup ? ( <>
            {order &&
                <Modal closePopup={() => {closePopup()}}>
        <div className={`${styles.container} pt-10 `}>
            <h2 className={`${styles.number} text text_type_digits-default`}>#{order.number}</h2>
            <p className={`${styles.text} text text_type_main-medium mt-10`}>{order.name}</p>
            {getOrderStatus(order.status)}
            <p className={`${styles.text} text text_type_main-medium mt-15 mb-6`}>Состав:</p>
            <FeedDetailsComposition orders={ingridientsData}/>
            <div className={`${styles.time_price} mt-10 mb-10`}>
                <p className="text text_type_main-default text_color_inactive"><FormattedDate
                    date={new Date(order.createdAt)}/> i-GMT+3</p>
                <div className={styles.totalPrice}>
                    <p className={`text text_type_digits-default`}>{totalPrice}</p>
                    <CurrencyIcon type='primary'/>
                </div>
            </div>
        </div>
                </Modal>
}
</>) :
           ( <> {order &&
               <div className={`${styles.container} pt-10 `}>
                   <h2 className={`${styles.number} text text_type_digits-default`}>#{order.number}</h2>
                   <p className={`${styles.text} text text_type_main-medium mt-10`}>{order.name}</p>
                   {getOrderStatus(order.status)}
                   <p className={`${styles.text} text text_type_main-medium mt-15 mb-6`}>Состав:</p>
                   <FeedDetailsComposition orders={ingridientsData}/>
                   <div className={`${styles.time_price} mt-10`}>
                       <p className="text text_type_main-default text_color_inactive"><FormattedDate
                           date={new Date(order.createdAt)}/> i-GMT+3</p>
                       <div className={styles.totalPrice}>
                           <p className={`text text_type_digits-default`}>{totalPrice}</p>
                           <CurrencyIcon type='primary'/>
                       </div>
                   </div>
               </div>
}
</>)
    )
}