import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
   WS_CLOSE_ORDERS_SOCKET,
    WS_CONNECTION_START,
} from "../../services/action-types/wsActionTypes";
import styles from './Feed.module.css'
import {FeedState} from "../../components/FeedState/FeedState";
import {FeedOrders} from "../../components/FeedOrders/FeedOrders";
import {getIngridients} from "../../services/actions/Ingridients";



export const FeedPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getIngridients())
        dispatch({
            type: WS_CONNECTION_START
        })
        return (() => {
            dispatch({
                type: WS_CLOSE_ORDERS_SOCKET
            })
        })
    })
    return (
            <main className={`${styles.main} pt-10`}>
                <div className={styles.title}>
                <h1 className="text text_type_main-large">Лента заказов</h1>
                    </div>
                <div className={styles.container}>
                    <FeedOrders />
                    <FeedState />
                </div>
            </main>
    )
}