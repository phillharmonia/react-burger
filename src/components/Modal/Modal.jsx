import React from 'react';
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const modalRoot = document.querySelector('#modal');

const Modal = ( {popupActive, children, closePopup} ) => {
const navigate = useNavigate()
    React.useEffect(() => {
        const closePopupOnEsc = (evt) => {
            if (evt.key === "Escape") {
                closePopup()
            }
        }
        setTimeout(() => {
            document.addEventListener("keydown", closePopupOnEsc);
        }, 0);
        return () => {
            document.removeEventListener("keydown", closePopupOnEsc);
        };
    });

    return ReactDOM.createPortal(
        <>
            <ModalOverlay active={popupActive} closePopup={closePopup} />
                <div className={styles.modal}>
                    <div className={styles.content}>
                        {children}
                        <div className={styles.close} onClick={closePopup}>
                            <CloseIcon type="primary" />
                        </div>
                    </div>
                </div>
</>
    , modalRoot)
}
Modal.propTypes = {
    closePopup: PropTypes.func.isRequired,
}
export default Modal;