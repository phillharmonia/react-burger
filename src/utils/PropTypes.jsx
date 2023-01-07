import PropTypes from 'prop-types';

const ingridientPropTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
})

export default  ingridientPropTypes;