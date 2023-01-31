import React, {useState, useEffect} from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx"
import {useDispatch} from "react-redux";
import {getIngridients} from "../../services/actions/Ingridients";

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
