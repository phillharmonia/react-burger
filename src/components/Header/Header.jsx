import styles from './Header.module.css'
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                    <div className={`${styles.menu__item} ${styles.menu__item_left}`}>
                        <Link to="/" className={`${styles.menu__link} ${styles.menu__link_left}`}>
                            <BurgerIcon type="primary"/>
                            <p className="text text_type_main-default">Конструктор</p>
                        </Link>
                        <a href="/" className={`${styles.menu__link} ${styles.menu__link_left}`}>
                            <ListIcon type="secondary"></ListIcon>
                            <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                        </a>
                    </div>
                    <div className={styles.menu__item}>
                        <Link to="/login" className={`${styles.menu__link_right} ${styles.menu__link}`}>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                        </Link>
                    </div>
                <div className={styles.menu__logo}>
                    <a href="/" className={styles.menu__link}>
                        <Logo/>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;