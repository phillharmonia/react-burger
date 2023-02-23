import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import styles from "./Constructor.module.css"
import BurgerIngridients from "../../components/BurgerIngridients/BurgerIngridients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

export const ConstructorPage = () => {
    return (
            <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngridients/>
                <BurgerConstructor/>
            </DndProvider>
            </main>
            )
}