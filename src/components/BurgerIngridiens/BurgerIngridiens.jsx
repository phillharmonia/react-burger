
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridiens.module.css'

const BurgerIngridiens = () => {
    const [current, setCurrent] = React.useState('bun')
    return (
        <section className={`${styles.section} pt-10`}>
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
        </section>
    )
}

export default BurgerIngridiens;
