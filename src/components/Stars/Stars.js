import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star/Star';

function Stars(props) {
    const {count} = props;

    const stars = !Number.isNaN(count)
                && (count > 0) 
                && (count < 6) 
                && <ul className='card-body-stars'>{Array(count).fill(count).map((item, index) => <Star key={index}/>)}</ul>
  return (
    <>
        {stars}
    </>
  )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Stars
