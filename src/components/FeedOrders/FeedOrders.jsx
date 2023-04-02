import {useDispatch, useSelector} from "react-redux";
import {FeedOrder} from "../FeedOrder/FeedOrder";
import styles from './FeedOrders.module.css'
import {Link} from "react-router-dom";
import React from "react";
import {SET_POPUP_ACITVE} from "../../services/actions/Popup";


export const FeedOrders = () => {
    const orders = useSelector(store => store.order.orders)
    const wsConnected = useSelector(store => store.order.wsConnected)
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch({type: SET_POPUP_ACITVE})
    }
    return wsConnected ? (
        <div className={`${styles.container} pr-2`}>
            {
                orders.map((order) => {
                    return (
                        <Link onClick={onClick} className={styles.link} to={`/feed/${order._id}`} >
                        <FeedOrder key={order._id} order={order} />
                        </Link>
                    )
                })
            }
        </div>
    ) : null
}