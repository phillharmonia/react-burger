import styles from './IngridientDetails.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";
import {getIngridientDetails} from "../../services/actions/IngridientsDetails";
import {getIngridients} from "../../services/actions/Ingridients";
import {SET_POPUP_CLOSE} from "../../services/actions/Popup";
import Modal from "../Modal/Modal";
const IngridientDetails = () => {
    const ingridients = useSelector(store => store.ingridients.ingridients)
    const dispatch = useDispatch()
    const { id } = useParams()
    const data = ingridients.find(ingredient => ingredient._id === id)
    const {popup}= useSelector(store => store.popup)
    const navigate = useNavigate()
    const closePopup = () => {
        dispatch({type: SET_POPUP_CLOSE})
        navigate(-1)
    }
    return (
       popup ? ( <>
            { data &&
                <Modal closePopup={closePopup}>
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
                </Modal>
            }
        </>) : (<>
               { data &&
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
               }
           </>)
    )
}

export default IngridientDetails;