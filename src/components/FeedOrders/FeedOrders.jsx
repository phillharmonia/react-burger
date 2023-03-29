import {useSelector} from "react-redux";
import {FeedOrder} from "../FeedOrder/FeedOrder";
import styles from './FeedOrders.module.css'


export const FeedOrders = () => {
    const orders = useSelector(store => store.order.orders)
    const wsConnected = useSelector(store => store.order.wsConnected)
    return wsConnected ? (
        <div className={`${styles.container} pr-2`}>
            {
                orders.map((order) => {
                    return (
                        <FeedOrder key={order._id} order={order} />
                    )
                })
            }
        </div>
    ) : null
}