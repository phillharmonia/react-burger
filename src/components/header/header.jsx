import styles from './header.module.css'
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.menu}>
                <ul className={`${styles.menu__items}`}>
                    <li className={`${styles.menu__item} ${styles.menu__item_left}`}>
                        <a href="/" className={styles.menu__link}>
                            <BurgerIcon type="primary"/>
                            <p className={styles.menu__text}>Конструктор</p>
                        </a>
                        <a href="/" className={styles.menu__link}>
                            <ListIcon type="secondary"></ListIcon>
                            <p className={styles.menu__text}>Лента заказов</p>
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>
                            <Logo/>
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>
                            <ProfileIcon/>
                            <p className={styles.menu__text}>Личный кабинет</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;