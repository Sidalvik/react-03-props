import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';

function Listing(props) {
    const {items} = props;

    const listItems = items.filter((o) => !o.error_messages).map((o, index) => <Item key = {o.listing_id} item = {o}/>)
  return (
    <div className="item-list">
        {listItems}
    </div>
  )
}

Listing.defaultProps = {
    items: [],
}

Listing.propTypes = {
    items: PropTypes.instanceOf(Array),
}

export default Listing
