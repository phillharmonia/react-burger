import styles from './OrderDetails.module.css'
import confirm from '../../images/confirm.svg'
import PropTypes from 'prop-types'

const OrderDetails = ({orderNumber}) => {
    return (
        <div className={`${styles.container} pt-30 pb-30 pl-25 pr-25`}>
            <h2 className="text text_type_digits-large mb-8">{orderNumber.order.number}</h2>
            <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
            <img src={confirm} alt='confirm' className={styles.confirm} />
            <p className="text text_type_main-medium mt-15 mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}
OrderDetails.propTypes = {
        orderNumber: PropTypes.number.isRequired
}
export default OrderDetails;