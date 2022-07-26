import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from './ItemDetails/ItemDetails';
import ItemImage from './ItemImage/ItemImage';

function Item(props) {
    const {item} = props;

  return (
    <div className="item">
        <ItemImage mainImage = {item.MainImage}/>
        <ItemDetails 
            title = {item.title}
            currency_code = {item.currency_code} 
            price = {item.price} 
            quantity = {item.quantity}>
        </ItemDetails>
    </div>
  )
}


Item.propTypes = {
    item: PropTypes.shape({
        listing_id: PropTypes.number.isRequired,
        url: PropTypes.string,
        MainImage: PropTypes.shape({
                        url_570xN: PropTypes.string,
                    }),
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    }).isRequired,
}


export default Item
