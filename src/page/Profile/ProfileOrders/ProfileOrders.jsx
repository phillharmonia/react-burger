import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getIngridients} from "../../../services/actions/Ingridients";
import {
    WS_CLOSE_USER_ORDERS_SOCKET,
    WS_USER_CONNECTION_START
} from "../../../services/action-types/wsActionTypes";
import styles from "./ProfileOrders.module.css"
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {FeedOrder} from "../../../components/FeedOrder/FeedOrder";
import {FeedDetails} from "../../../components/FeedDetails/FeedDetails";
import {SET_POPUP_ACITVE} from "../../../services/actions/Popup";
import {wsConnectionClose, wsConnectionOpenUser} from "../../../services/actions/wsActions";




export const ProfileOrders = () => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch({type: SET_POPUP_ACITVE})
    }
    useEffect(() => {
        dispatch(wsConnectionOpenUser())
        return (() => {
            dispatch(wsConnectionClose())
        })
    },[])
    const wsConnected = useSelector(store => store.order.wsConnected)
    const orders = useSelector(store => store.order.orders)
    const {popup} = useSelector(store => store.popup)
    const {pathname} = useLocation()

    return wsConnected ? (
        <>
            {
                (popup || pathname === "/profile/orders" ) &&
        <div className={`${styles.container} mt-10 pr-2`}>
            <div className={styles.container_items}>
            {
                orders.map((order) => {
                    return (
                        <Link key={order._id} onClick={onClick} className={styles.link} to={`/profile/orders/${order._id}`} >
                            <FeedOrder order={order} />
                        </Link>
                    )
                })
            }
            </div>
        </div>
            }
            <Routes>
                <Route path="/:id" element={<FeedDetails />} />
            </Routes>
        </>
    ) : null
}