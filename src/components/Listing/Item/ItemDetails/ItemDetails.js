import React from 'react'
import PropTypes from 'prop-types'

function ItemDetails(props) {
    const {title, currency_code, price, quantity} = props;

    return (
        <div className="item-details">
            <p className="item-title">{title?.slice(0, 50)}{title?.length > 50 && '…'}</p>
            <p className="item-price">{currency_code === `USD` ? '$' + price : currency_code === `EUR` ? '€' + price : price + ' ' + currency_code}</p>
            <p className={`item-quantity ` + ((+quantity <= 10) ? `level-low` : (quantity <= 20) ? `level-medium` : `level-high`)}>{quantity} left</p>
        </div>
    )
}


ItemDetails.defaultProps = {
    title: '',
    currency_code: '',
    price: '',
    quantity: 0,
}

ItemDetails.propTypes = {
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
}

export default ItemDetails
