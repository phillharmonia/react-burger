import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import styles from './FeedDetailsComposition.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const FeedDetailsComposition = ({orders}) => {
    const ingridients = useSelector(store => store.ingridients.ingridients)
    const countItems = (element, arr) => {
        return arr.filter(item => item._id === element._id).length
    }
    const ingridientsOrder = useMemo(() => {
        return orders.map((element) => {
            return ingridients.find((item) => {
                return element._id === item._id
            })
        }).filter((element, index, arr) => {
            return arr.findIndex(item => item._id === element._id) === index
        })
    }, [orders, ingridients])
    return (
        <div className={styles.scroll}>
            {ingridientsOrder.map((order) => {
                const itemCount = countItems(order, orders);
                return (
                            <div className={styles.container} key={order._id}>
                                <div className={styles.container_info}>
                            <div className={styles.border}>
                                <div className={styles.container_image}>
                                    <img className={styles.image} src={order.image} alt={order.name}/>
                                </div>
                            </div>
                                    <p className={`${styles.name} text text_type_main-default`}>{order.name}</p>
                                </div>
                                    <div className={styles.price}>
                                        <p className="text text_type_digits-default">{itemCount} x {order.price}</p>
                                        <CurrencyIcon type='primary'/>
                                    </div>
                                </div>
                )
            })
            }
        </div>
    )
}
