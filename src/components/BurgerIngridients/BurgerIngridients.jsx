import React, {useEffect, useState} from 'react';
import {Counter, CurrencyIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridiens.module.css'
import ingridientPropTypes from "../../utils/PropTypes";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import IngridientDetails from "../IngridientDetails/IngridientDetails";
import {useDispatch, useSelector} from "react-redux";
import {getIngridients} from "../../services/actions/Ingridients";
import {useInView} from "react-intersection-observer";
import {closeIngridientDetails, getIngridientDetails} from "../../services/actions/IngridientsDetails";
import {BurgerIngridient} from "./BurgerIngridient";

const BurgerIngridients = () => {
    const [current, setCurrent] = React.useState('bun')
    const [popupActive, setPopupActive] = useState(false)
    const dispatch = useDispatch()
    const ingridients = useSelector(store => store.ingridients.ingridients)
    useEffect(() => {
        dispatch(
            getIngridients())
    }, [dispatch])
    const openPopup = () => {
        setPopupActive(true)
    }
    const getDetails = (props) => {
        dispatch(getIngridientDetails(props))
    }
    const {ref: bunRef, inView: bunInView} = useInView({
        threshold: 0.5
    })
    const {ref: sauceRef, inView: sauceInView} = useInView({
        threshold: 0.5
    })
    const {ref: mainRef, inView: mainInView} = useInView({
        threshold: 0.5
    })
    const positionScroll = (evt) => {
        switch (evt) {
            case bunInView:
                setCurrent('bun')
                break;
            case sauceInView:
                setCurrent('sauce')
                break;
            case mainInView:
                setCurrent('main')
                break;
            default:
                break;
        }
    }
    const onTabClick = (tab) => {
        setCurrent(tab);
        const place = document.getElementById(tab)
        place.scrollIntoView({behavior: "smooth"})
    }
    useEffect(() => {
        positionScroll()
    }, [bunInView, sauceInView, mainInView])
    return (
        <section className={`${styles.section} mt-10`}>
            <h1 className={`mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <nav className={`${styles.nav} mb-10`}>
                <Tab href="#bun" value="bun" active={current === 'bun'} onClick={() => onTabClick('bun')}>
                    Булки
                </Tab>
                <Tab href="#sauce" value="sauce" active={current === 'sauce'} onClick={() => onTabClick('sauce')}>
                    Соусы
                </Tab>
                <Tab href="#main" value="main" active={current === 'main'} onClick={() => onTabClick('main')}>
                    Начинки
                </Tab>
            </nav>
            <div className={`${styles.ingridient_list}`}>
                <div className={`${styles.ingridients} mb-10`}>
                    <h3 ref={bunRef} id='bun' className={`text text_type_main-medium mb-6`}>Булки</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'bun' &&
                            <li className={styles.ingridient_item}
                                onClick={() => {
                                openPopup();
                                getDetails(props)
                            }}
                                key={props._id}>
                                <BurgerIngridient
                                    name={props.name}
                                    price={props.price}
                                    image={props.image}
                                />
                            </li>
                        )
                        }
                        </>
                    </ul>
                </div>
                <div className={`${styles.ingridients} mt-10 mb-10`}>
                    <h3 ref={sauceRef} id='sauce' className={`text text_type_main-medium mb-6`}>Соусы</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'sauce' &&
                            <li className={styles.ingridient_item}
                                onClick={() => {
                                    openPopup();
                                    getDetails(props)
                                }}
                                key={props._id}>
                                <BurgerIngridient
                                    name={props.name}
                                    price={props.price}
                                    image={props.image}
                                />
                            </li>
                        )
                        }
                        </>
                    </ul>
                </div>
                <div className={`${styles.ingridients} mt-10 mb-10`}>
                    <h3 ref={mainRef} id='main' className={`text text_type_main-medium mb-6`}>Начинки</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'main' &&
                            <li className={styles.ingridient_item}
                                onClick={() => {
                                    openPopup();
                                    getDetails(props)
                                }}
                                key={props._id}>
                                <BurgerIngridient
                                    name={props.name}
                                    price={props.price}
                                    image={props.image}
                                />
                            </li>
                        )
                        }
                        </>
                    </ul>
                </div>
                {
                    popupActive && (
                        <Modal closePopup={() => {
                            setPopupActive(false)
                            dispatch(closeIngridientDetails())
                        }
                        }>
                            <IngridientDetails/>
                        </Modal>
                    )
                }
            </div>
        </section>
    )
}
ingridientPropTypes.protoType = {
    ingredient: PropTypes.arrayOf(ingridientPropTypes.isRequired)
}
export default BurgerIngridients;
