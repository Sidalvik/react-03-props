import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  const {from, message} = props;

  return (
    <>
      <div className = "message-data">
        <span className = "message-data-name"><i className = "fa fa-circle online"></i> {from.name}</span>
        <span className = "message-data-time">{message.time}</span>
      </div>
      <div className = "message my-message">
        {message.text}
      </div>
    </>
  )
}


Message.defaultProps = {
  from: {name: 'Unknown',},
  message: {},
}

Message.propTypes = {
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

export default Message
