import styles from './IngridientDetails.module.css';
import {useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
const IngridientDetails = () => {
    const data = useSelector(store => store.ingridientDetails.ingridient)
    const { id } = useParams()
    return (
        <div className={`${styles.container} pt-10 pb-15`}>
            <h2 className={`${styles.title} text text_type_main-large`}>Детали ингридиента</h2>
            <img src={data.image_large} alt={data.name}/>
            <p className='text text_type_main-medium mt-4'>{data.name}</p>
            <ul className={`${styles.stats} text text_type_main-default text_color_inactive mt-8`}>
                <li className={styles.value}>
                    <p>Калории,ккал</p>
                    <p className="text text_type_digits-default mt-2">{data.calories}</p>
                </li>
                <li className={styles.value}>
                    <p>Белки, г</p>
                    <p className="text text_type_digits-default mt-2">{data.proteins}</p>
                </li>
                <li className={styles.value}>
                    <p>Жиры, г</p>
                    <p className="text text_type_digits-default mt-2">{data.fat}</p>
                </li>
                <li className={styles.value}>
                    <p>Углеводы, г</p>
                    <p className="text text_type_digits-default mt-2">
                        {data.carbohydrates}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default IngridientDetails;