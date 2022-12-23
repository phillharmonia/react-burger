import React from 'react';
import styles from './App.module.css'
import Header from "../Header/Header.jsx"
import  BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>
                <BurgerIngridiens />
            </main>
        </div>
    );
}

export default App;
