import React, {useState, useMemo, useCallback} from 'react';
import styles from './BurgerConstructor.module.css'
import {
    ConstructorElement,
    Button,
}
    from '@ya.praktikum/react-developer-burger-ui-components'
import curicon from '../../images/curicon.svg'
import Modal from '../Modal/Modal.jsx'
import OrderDetails from "../OrderDetails/OrderDetails.jsx";
import {useDispatch, useSelector} from "react-redux";

import {useDrop} from "react-dnd";
import {ADD_BUN, ADD_INGRIDIENT, MOVE_INGRIDIENT} from "../../services/actions/Constructor";
import {v4 as uuid4} from "uuid"
import {BurgerConstructorItem} from "./BurgerConstructor-items";
import {getOrder, ORDER_CLOSE} from "../../services/actions/OrderDetails";
import {useNavigate} from "react-router-dom";

const BurgerConstructor = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user.user)
    const openPopup = () => {
        user ? dispatch(getOrder(ingridientsId)) : navigate("/login")
    }
    const {orderDetailsRequest} = useSelector(store => store.orderDetails)
    const ingridients = useSelector(store => store.ingridientsConstructor.ingridients)
    const bun = useSelector(store => store.ingridientsConstructor.bun)
    const ingridientsId = useMemo(() => ingridients.map((item) => item._id), [ingridients])

    const totalPrice = useMemo(() => {
        return ingridients.reduce((total, item) => total + item.price, bun ? bun.price * 2 : 0)
    }, [ingridients, bun])
    const dispatch = useDispatch()
    const [, dropRef] = useDrop({
        accept: "ingridients",
        drop(item) {
            item.uuid = uuid4()
            if (item.ingridient.type === 'bun') {
                dispatch({
                    type: ADD_BUN,
                    data: item.ingridient
                })
            } else {
                dispatch({
                    type: ADD_INGRIDIENT,
                    data: {...item.ingridient, uuid: uuid4()}
                })
            }
        }
    })
    const orderNumber = useSelector(store => store.orderDetails.orderDetailsNumber)
    return (
        <section className={`${styles.section} pt-25`}>
            <div className={`${styles.constructor} ml-4`} ref={dropRef}>
                {bun.length === 0 ? null : (<ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image_mobile}
                    extraClass="ml-8"
                />)}
                {ingridients.length === 0 ?
                    (<p className={`${styles.constructor_list} text_type_main-medium menu__title`}>Добавьте
                        ингридиенты</p>)
                    : <ul className={`${styles.constructor_list}`}>
                        {ingridients.map((props, index) =>
                            (props.type === 'sauce' || props.type === 'main') &&
                            <BurgerConstructorItem
                                props={props}
                                key={props.uuid}
                                index={index}
                            />
                        )
                        }
                    </ul>
                }
                {bun.length === 0 ? null : (<ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image_mobile}
                    extraClass="ml-8"
                />)}
            </div>
            <div className={`${styles.counter} mt-10`}>
                <div className={styles.price_container}>
                    <p className='text text_type_digits-medium'>{totalPrice || 0}</p>
                    <img src={curicon} alt="currency icon"/>
                </div>
                { orderDetailsRequest ? (<Button type="primary" onClick={openPopup} htmlType={'button'} size="large" disabled>{orderDetailsRequest ? 'Обрабатываем...' : 'Оформить заказ'}</Button>)
                   : (<Button type="primary" onClick={openPopup} htmlType={'button'} size="large">Оформить заказ</Button>)
                }
            </div>
            {
                orderNumber && (
                    <Modal closePopup={() => {
                        dispatch({
                            type: ORDER_CLOSE
                        })
                    }
                    }>
                        <OrderDetails/>
                    </Modal>
                )
            }
        </section>
    )
}


export default BurgerConstructor;