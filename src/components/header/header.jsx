import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.menu}>
                <ul className={styles.menu__items}>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>

                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>

                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>
                            <Logo/>
                        </a>
                    </li>
                    <li className={styles.menu__item}>
                        <a href="/" className={styles.menu__link}>

                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;