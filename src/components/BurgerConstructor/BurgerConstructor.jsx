import React, {useState} from 'react';
import styles from './BurgerConstructor.module.css'
import {
    ConstructorElement,
    CurrencyIcon,
    Button,
    DragIcon
}
    from '@ya.praktikum/react-developer-burger-ui-components'
import curicon from '../../images/curicon.svg'
import Modal from '../Modal/Modal.jsx'
import OrderDetails from "../OrderDetails/OrderDetails.jsx";
import PropTypes from 'prop-types';
import ingridientPropTypes from "../../utils/PropTypes";

const BurgerConstructor = ({ingridients}) => {
    const [popupActive, setPopupActive] = useState(false)
    const openPopup = () => {
        setPopupActive(true)
    }
    return (
        <section className={`${styles.section} pt-25`}>
            <div className={`${styles.constructor} ml-4`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    extraClass="ml-8"
                />
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
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    extraClass="ml-8"
                />
            </div>
            <div className={`${styles.counter} mt-10`}>
                <div className={styles.price_container}>
                    <p className='text text_type_digits-medium'>610</p>
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
                        <OrderDetails />
                    </Modal>
                )
            }
        </section>
    )
}
BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingridientPropTypes.isRequired).isRequired,
    onClick: PropTypes.func.isRequired
}

export default BurgerConstructor;