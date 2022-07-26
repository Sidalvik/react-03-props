import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star/Star';

function Stars(props) {
    const {count} = props;

    const stars = !Number.isNaN(count)
                && (count > 0) 
                && (count < 6) 
                && <ul className='card-body-stars'>{[1, 2, 3, 4, 5].filter((item) => item <= count).map((item, index) => <Star key={index}/>)}</ul>
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
