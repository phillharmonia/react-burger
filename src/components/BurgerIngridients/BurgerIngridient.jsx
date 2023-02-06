import styles from "./BurgerIngridiens.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


export const BurgerIngridient = ({image, name, price}) => {
    return (
        <>
            <img className={styles.image} src={image} alt={name}/>
            <div className={`${styles.price} mt-1 mb-1`}>
                <p className={`text text_type_digits-default`}>{price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className={`text text_type_main-default`}>{name}</p>
            <Counter count={1} size="default"/>
        </>
    )
}