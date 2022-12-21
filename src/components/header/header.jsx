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
                    <div className={`${styles.menu__item} ${styles.menu__item_left}`}>
                        <a href="/" className={`${styles.menu__link} ${styles.menu__link_left}`}>
                            <BurgerIcon type="primary"/>
                            <p className="text text_type_main-default">Конструктор</p>
                        </a>
                        <a href="/" className={`${styles.menu__link} ${styles.menu__link_left}`}>
                            <ListIcon type="secondary"></ListIcon>
                            <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                        </a>
                    </div>
                    <div className={styles.menu__item}>
                        <a href="/" className={`${styles.menu__link_right} ${styles.menu__link}`}>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                        </a>
                    </div>
                <div className={styles.menu__logo}>
                    <a href="/" className={styles.menu__link}>
                        <Logo/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;