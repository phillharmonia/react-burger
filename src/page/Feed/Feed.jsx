import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_START,
} from "../../services/action-types/wsActionTypes";
import styles from './Feed.module.css'
import {FeedState} from "../../components/FeedState/FeedState";



export const FeedPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START
        })
        return (() => {
            dispatch({
                type: WS_CONNECTION_CLOSED
            })
        })
    })
    return (
            <main className={`${styles.main} pt-10`}>
                <div className={styles.title}>
                <h1 className="text text_type_main-large">Лента заказов</h1>
                    </div>
                <div>
                    <FeedState />
                </div>
            </main>
    )
}