import {useDispatch, useSelector} from "react-redux";
import {FeedOrder} from "../FeedOrder/FeedOrder";
import styles from './FeedOrders.module.css'
import {Link, Route, Routes, useLocation} from "react-router-dom";
import React from "react";
import {SET_POPUP_ACITVE} from "../../services/actions/Popup";
import {FeedDetails} from "../FeedDetails/FeedDetails";


export const FeedOrders = () => {
    const orders = useSelector(store => store.order.orders)
    const wsConnected = useSelector(store => store.order.wsConnected)
    const dispatch = useDispatch()
    const {popup} = useSelector(store => store.popup)
    const {pathname} = useLocation()
    const onClick = () => {
        dispatch({type: SET_POPUP_ACITVE})
    }
    return wsConnected ? (
                <div className={`${styles.container} pr-2`}>
                    {
                        orders.map((order) => {
                            return (
                                <Link key={order._id} onClick={onClick} className={styles.link} to={`/feed/${order._id}`} >
                                    <FeedOrder order={order} />
                                </Link>
                            )
                        })
                    }
                </div>
    ) : null
}