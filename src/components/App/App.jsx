import React, {useState, useEffect} from 'react'
import styles from "./App.module.css"
import Header from "../Header/Header.jsx"
import BurgerIngridiens from "../BurgerIngridiens/BurgerIngridiens.jsx"
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx"
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.main}>
                <DndProvider backend={HTML5Backend()}>
                <BurgerIngridiens />
                </DndProvider>
            </main>
        </div>
    );
}

export default App;
