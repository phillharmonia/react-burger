import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getIngridients} from "../../../services/actions/Ingridients";
import {
    WS_CLOSE_USER_ORDERS_SOCKET,
    WS_USER_CONNECTION_START
} from "../../../services/action-types/wsActionTypes";
import styles from "./ProfileOrders.module.css"
import {Link, Route, Routes} from "react-router-dom";
import {FeedOrder} from "../../../components/FeedOrder/FeedOrder";
import {FeedDetails} from "../../../components/FeedDetails/FeedDetails";



export const ProfileOrders = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: WS_USER_CONNECTION_START
        })
        return (() => {
            dispatch({
                type: WS_CLOSE_USER_ORDERS_SOCKET
            })
        })
    },[])
    const wsConnected = useSelector(store => store.order.wsConnectedUser)
    const orders = useSelector(store => store.order.orders)

    return wsConnected ? (
        <div className={`${styles.container} mt-10 pr-2`}>
            <div className={styles.container_items}>
            {
                orders.map((order) => {
                    return (
                        <Link className={styles.link} to={`/profile/orders/${order._id}`} >
                            <FeedOrder key={order._id} order={order} />
                        </Link>
                    )
                })
            }
                <Routes>
                    <Route path="/:id" element={<FeedDetails />} />
                </Routes>
            </div>
        </div>
    ) : null
}