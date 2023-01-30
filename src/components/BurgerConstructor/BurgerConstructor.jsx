import React, { useState, useContext, useMemo } from 'react';
import styles from './BurgerConstructor.module.css'
import {
    ConstructorElement,
    Button,
    DragIcon
}
    from '@ya.praktikum/react-developer-burger-ui-components'
import curicon from '../../images/curicon.svg'
import Modal from '../Modal/Modal.jsx'
import OrderDetails from "../OrderDetails/OrderDetails.jsx";
import PropTypes from 'prop-types';
import ingridientPropTypes from "../../utils/PropTypes";
import {ConstructorContext} from "../../services/ConstructorContext";
import {API_ORDER, CheckRes} from "../../utils/Api";

const BurgerConstructor = () => {
    const [popupActive, setPopupActive] = useState(false)
    const [orderNum, setOrderNum] = useState({
        name: '',
        order: {
            number: ''
        },
        success: false
    });
    const openPopup = () => {
        setPopupActive(true)
        fetch(API_ORDER, {
            method: "POST",
            body: JSON.stringify({
                ingredients: ingridientsId,
            }),
            headers: {
                'Content-Type': 'application/json'
        }
        })
            .then(CheckRes)
            .then((data) => {
                setOrderNum(data)
            })
            .catch(error => {console.log(error)})
    }
    const ingridients = useContext(ConstructorContext);
    const ingridientsId = useMemo(() => ingridients.map((item) => item._id), [ingridients])
    const ingridietnsWithoutBun = useMemo(() => ingridients.filter((item) => item.type !== 'bun'))
    const bun = useMemo(() => ingridients.find((item) => item.type === 'bun'), [ingridients])
    const totalPrice = useMemo(() => {
        return ingridietnsWithoutBun.reduce((total,item) => total + item.price, bun ? bun.price * 2 : 0)
    }, [ingridients, bun])
    return (
        <section className={`${styles.section} pt-25`}>
            <div className={`${styles.constructor} ml-4`}>
                {bun && <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image_mobile}
                    extraClass="ml-8"
                />}
                <ul className={`${styles.constructor_list}`}>
                    <> {ingridients.map(props =>
                        props.type === 'sauce' || props.type === 'main' &&
                        <li key={props._id}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                isLocked={false}
                                text={props.name}
                                price={props.price}
                                thumbnail={props.image}
                                extraClass="ml-2"
                            />
                        </li>
                    )
                    }
                    </>
                </ul>
                {bun && <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image_mobile}
                    extraClass="ml-8"
                />}
            </div>
            <div className={`${styles.counter} mt-10`}>
                <div className={styles.price_container}>
                    <p className='text text_type_digits-medium'>{totalPrice}</p>
                    <img src={curicon} alt="currency icon"/>
                </div>
                <Button type="primary" onClick={openPopup} htmlType={'button'} size="large">Оформить заказ</Button>
            </div>
            {
                popupActive && (
                    <Modal closePopup={() => {
                        setPopupActive(false)
                    }
                    }>
                        <OrderDetails orderNumber={orderNum} />
                    </Modal>
                )
            }
        </section>
    )
}


export default BurgerConstructor;