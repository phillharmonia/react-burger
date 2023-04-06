import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
   WS_CLOSE_ORDERS_SOCKET,
    WS_CONNECTION_START,
} from "../../services/action-types/wsActionTypes";
import styles from './Feed.module.css'
import {FeedState} from "../../components/FeedState/FeedState";
import {FeedOrders} from "../../components/FeedOrders/FeedOrders";
import {getIngridients} from "../../services/actions/Ingridients";
import {wsConnectionClose, wsConnectionOpen} from "../../services/actions/wsActions";
import {Route, Routes, useLocation} from "react-router-dom";
import {FeedDetails} from "../../components/FeedDetails/FeedDetails";



export const FeedPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(wsConnectionOpen())
        return (() => {
            dispatch(wsConnectionClose())
        })
    },[])
    const {pathname} = useLocation()
    const {popup} = useSelector(store => store.popup)
    return (  <>
        {
            (popup || pathname === "/feed" ) &&
            <main className={`${styles.main} pt-10`}>
                <div className={styles.title}>
                <h1 className="text text_type_main-large">Лента заказов</h1>
                    </div>
                <div className={styles.container}>
                    <FeedOrders />
                    <FeedState />
                </div>
            </main>
        }
            <Routes>
                <Route path="/:id" element={<FeedDetails />} />
            </Routes>
            </>
    )
}