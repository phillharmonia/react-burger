import React, {useState, useEffect} from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import  BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx"
import {Api, CheckRes} from "../Api/Api.jsx"

function App() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`${Api.url}`)
            .then(CheckRes)
            .then((result) => {
                setData(result.data)
            })
            .catch(error => {console.log(error)})
            .finally(() => setIsLoaded(true))
        }, [])

    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>
                <BurgerIngridiens ingridients={data} />
                <BurgerConstructor ingridients={data} />
            </main>
        </div>
    );
}

export default App;
