import React, {useState} from 'react';
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridiens.module.css'
import ingridientPropTypes from "../../utils/PropTypes";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import IngridientDetails from "../IngridientDetails/IngridientDetails";

const BurgerIngridiens = ({ingridients}) => {
    const [current, setCurrent] = React.useState('bun')
    const [popupActive, setPopupActive] = useState(false)
    const [details, setDetails] = useState({})
    const openPopup = () => {
        setPopupActive(true)
    }
    const getDetails = (props) => {
        setDetails(props)
    }
    return (
        <section className={`${styles.section} mt-10`}>
            <h1 className={`mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <nav className={`${styles.nav} mb-10`}>
                <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>
            <div className={`${styles.ingridient_list}`}>
            <div className={`${styles.ingridients} mb-10`}>
                <h3 className={`text text_type_main-medium mb-6`}>Булки</h3>
                <ul className={`${styles.ingridient_items}`}>
                    <> { ingridients.map(props =>
                            props.type === 'bun' &&
                                <li className={styles.ingridient_item} key={props._id} onClick={()=> {openPopup();getDetails(props)}}>
                                    <img className={styles.image} src={props.image} alt={props.name}/>
                                    <div className={`${styles.price} mt-1 mb-1`}>
                                        <p className={`text text_type_digits-default`}>{props.price}</p>
                                        <CurrencyIcon type='primary' />
                                    </div>
                                    <p className={`text text_type_main-default`}>{props.name}</p>
                                    <Counter count={1} size="default" />
                                </li>)
                        }
                        </>
                </ul>
            </div>
            <div className={`${styles.ingridients} mt-10 mb-10`}>
                <h3 className={`text text_type_main-medium mb-6`}>Соусы</h3>
                <ul className={`${styles.ingridient_items}`}>
                    { ingridients.map(props =>
                        props.type === 'sauce' &&
                        <li className={styles.ingridient_item} key={props._id} onClick={()=> {openPopup();getDetails(props)}}>
                            <img className={styles.image} src={props.image} alt={props.name}/>
                            <div className={`${styles.price} mt-1 mb-1`}>
                                <p className={`text text_type_digits-default`}>{props.price}</p>
                                <CurrencyIcon type='primary' />
                            </div>
                            <p className={`text text_type_main-default`}>{props.name}</p>
                            <Counter count={1} size="default" />
                        </li>)
                    }
                </ul>
            </div>
            <div className={`${styles.ingridients} mt-10 mb-10`}>
                <h3 className={`text text_type_main-medium mb-6`}>Начинки</h3>
                <ul className={`${styles.ingridient_items}`}>
                    { ingridients.map(props =>
                        props.type === 'main' &&
                        <li className={styles.ingridient_item} key={props._id} onClick={()=> {openPopup();getDetails(props)}}>
                            <img className={styles.image} src={props.image} alt={props.name}/>
                            <div className={`${styles.price} mt-1 mb-1`}>
                                <p className={`text text_type_digits-default`}>{props.price}</p>
                                <CurrencyIcon type='primary' />
                            </div>
                            <p className={`text text_type_main-default`}>{props.name}</p>
                            <Counter count={1} size="default" />
                        </li>)
                    }
                </ul>
            </div>
            </div>
            {
                popupActive && (
                    <Modal closePopup={() => {
                        setPopupActive(false)
                    }
                    }>
                        <IngridientDetails data={details}/>
                    </Modal>
                )
            }
        </section>
    )
}
ingridientPropTypes.protoType = {
    ingredient: PropTypes.arrayOf(ingridientPropTypes.isRequired)
}
export default BurgerIngridiens;
