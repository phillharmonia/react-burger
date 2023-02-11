import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'

const ModalOverlay = ({ closePopup }) => {
return <div className={styles.overlay} onClick={closePopup}></div>
}

export default ModalOverlay