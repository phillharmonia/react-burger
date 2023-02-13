import styles from "./BurgerIngridiens.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag } from "react-dnd";
import ingridientPropTypes from "../../utils/PropTypes";
import PropTypes from 'prop-types';





export const BurgerIngridient = ({ ingridient }) => {
    const { image, name, price, _id } = ingridient
    const [{ opacity }, dragRef] = useDrag({
        type: "ingridients",
        item: { ingridient },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })
    return (
        <li className={styles.ingridient_item} key={_id} ref={dragRef} style={{ opacity }}>
            <img className={styles.image} src={image} alt={name}/>
            <div className={`${styles.price} mt-1 mb-1`}>
                <p className={`text text_type_digits-default`}>{price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className={`text text_type_main-default`}>{name}</p>
            <Counter count={1} size="default"/>
        </li>
    )
}

BurgerIngridient.propTypes = {
    ingridient: ingridientPropTypes.isRequired
}