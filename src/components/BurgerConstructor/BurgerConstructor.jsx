import React from 'react';
import data from '../../utils/data.js'
import styles from './BurgerConstructor.module.css'
import {
    ConstructorElement,
    CurrencyIcon,
    Button,
    DragIcon
}
    from '@ya.praktikum/react-developer-burger-ui-components'
import curicon from '../../images/curicon.svg'

const BurgerConstructor = () => {

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
                    <> {data.map(props =>
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
                        <img src={curicon} alt="currency icon" />
                    </div>
                    <Button type="primary" size="large">Оформить заказ</Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;