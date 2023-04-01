import { useSelector} from "react-redux";
import {FeedOrder} from "../FeedOrder/FeedOrder";
import styles from './FeedOrders.module.css'
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Modal from "../Modal/Modal";
import {closeIngridientDetails} from "../../services/actions/IngridientsDetails";
import IngridientDetails from "../IngridientDetails/IngridientDetails";
import {FeedDetails} from "../FeedDetails/FeedDetails";


export const FeedOrders = () => {
    const orders = useSelector(store => store.order.orders)
    const wsConnected = useSelector(store => store.order.wsConnected)
    return wsConnected ? (
        <div className={`${styles.container} pr-2`}>
            {
                orders.map((order) => {
                    return (
                        <Link className={styles.link} to={`/feed/${order._id}`} >
                        <FeedOrder key={order._id} order={order} />
                        </Link>
                    )
                })
            }
        </div>
    ) : null
}