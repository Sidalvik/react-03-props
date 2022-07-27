import React from 'react'
import PropTypes from 'prop-types'

function Response(props) {
  const {from, message} = props;

  return (
    <>
      <div className = "message-data align-right">
        <span className = "message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className = "message-data-name">{from.name}</span>
        <i className = "fa fa-circle me"></i>
      </div>
      <div className = "message other-message float-right">
        {message.text}
      </div>
    </>
  )
}


Response.defaultProps = {
    from: {name: 'Unknown',},
    message: {},
  }


Response.propTypes = {
    from: PropTypes.shape({
      name: PropTypes.string,
    }),
    message: PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.shape({
        name: PropTypes.string, 
      }),
      type: PropTypes.string.isRequired,
      time: PropTypes.string,
      text: PropTypes.string,
    }),
}

export default Response
