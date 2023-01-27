import React, {useState, useEffect} from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx"
import { Api, CheckRes } from "../../utils/Api.jsx"
import { ConstructorContext } from "../../services/ConstructorContext";

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${Api.url}`)
            .then(CheckRes)
            .then((result) => {
                setData(result.data)
            })
            .catch(error => {console.log(error)})
        }, [])

    return (
        <div className={styles.App}>
            <Header />
            <ConstructorContext.Provider value={data}>
            <main className={styles.main}>
                <BurgerIngridiens />
                <BurgerConstructor />
            </main>
            </ConstructorContext.Provider>
        </div>
    );
}

export default App;
