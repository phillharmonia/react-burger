import React from 'react';
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import  BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx"

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>
                <BurgerIngridiens />
                <BurgerConstructor />
            </main>
        </div>
    );
}

export default App;
