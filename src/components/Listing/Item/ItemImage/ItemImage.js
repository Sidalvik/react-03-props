import React from 'react'
import PropTypes from 'prop-types'

function ItemImage(props) {
    const {mainImage, url} = props;
  return (
    <div className="item-image">
        <a href = {url}><img src = {mainImage.url_570xN} alt = ''/></a>
    </div>
  )
}

ItemImage.defaultProps = {
    url: '#',
    mainImage: {url_570xN: ''},
}

ItemImage.propTypes = {
    mainImage: PropTypes.shape({
        url_570xN: PropTypes.string,
    }),
    url: PropTypes.string,
}

export default ItemImage
