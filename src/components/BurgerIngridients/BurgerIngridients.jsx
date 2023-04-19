import React, {useEffect, useState} from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridiens.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";
import {BurgerIngridient} from "./BurgerIngridient";
import {Link, useLocation} from "react-router-dom";
import {SET_POPUP_ACITVE} from "../../services/actions/Popup";

const BurgerIngridients = () => {
    const [current, setCurrent] = React.useState('bun')
    const dispatch = useDispatch()
    const location = useLocation()
    const ingridients = useSelector(store => store.ingridients.ingridients)
    const onClick = () => {
        {
            dispatch({type: SET_POPUP_ACITVE})
        }
    }
    const {ref: bunRef, inView: bunInView} = useInView({
        threshold: 0.5,
        onChange: (inView) => inView && setCurrent('bun')
    })
    const {ref: sauceRef, inView: sauceInView} = useInView({
        threshold: 0.5,
        onChange: (inView) => inView && setCurrent('sauce')
    })
    const {ref: mainRef, inView: mainInView} = useInView({
        threshold: 0.5,
        onChange: (inView) => inView && setCurrent('main')
    })
    const positionScroll = () => {
        switch (true) {
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
    useEffect(() => {
        positionScroll()
    }, [bunInView, sauceInView, mainInView])
    const onTabClick = (tab) => {
        setCurrent(tab);
        const place = document.getElementById(tab)
        place.scrollIntoView({behavior: "smooth"})
    }
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
                <div id='bun' className={`${styles.ingridients} mb-10`}>
                    <h3 ref={bunRef} className={`text text_type_main-medium mb-6`}>Булки</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'bun' &&
                            <Link
                                className={styles.link}
                                to={{pathname: `ingridients/${props._id}`}}
                                key={props._id}>
                                <div
                                    onClick={onClick}
                                >
                                    <BurgerIngridient
                                        ingridient={props}
                                    />
                                </div>
                            </Link
>
                        )
                        }
                        </>
                    </ul>
                </div>
                <div  id='sauce' className={`${styles.ingridients} mt-10 mb-10`}>
                    <h3 ref={sauceRef} className={`text text_type_main-medium mb-6`}>Соусы</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'sauce' &&
                            <Link
                                className={styles.link}
                                to={{pathname: `ingridients/${props._id}`}}
                                key={props._id}>
                                <div
                                    onClick={onClick}
                                >
                                    <BurgerIngridient
                                        ingridient={props}
                                        key={props._id}
                                    />
                                </div>
                            </Link
>
                        )
                        }
                        </>
                    </ul>
                </div>
                <div id='main' className={`${styles.ingridients} mt-10 mb-10`}>
                    <h3 ref={mainRef} className={`text text_type_main-medium mb-6`}>Начинки</h3>
                    <ul className={`${styles.ingridient_items}`}>
                        <> {ingridients.map(props =>
                            props.type === 'main' &&
                            <Link
                                className={styles.link}
                                to={{pathname: `ingridients/${props._id}`,  state: {background: location}}}
                                key={props._id}>
                            <div
                                onClick={onClick}
                            >
                                <BurgerIngridient
                                    ingridient={props}
                                    key={props._id}
                                />
                            </div>
                                </Link>
                        )
                        }
                        </>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngridients;
