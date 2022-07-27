import React from 'react'
import PropTypes from 'prop-types'

function Typing(props) {
  const {from, message} = props;

  return (
    <>
      <div className = "message-data">
        <span className = "message-data-name"><i className ="fa fa-circle online"></i> {from.name}</span>
        <span className = "message-data-time">{message.time}</span>
      </div>
      <i className ="fa fa-circle online"></i><i className ="fa fa-circle online"></i><i className ="fa fa-circle online"></i> 
    </>
  )
}


Typing.defaultProps = {
    from: {name: 'Unknown',},
    message: {},
  }


Typing.propTypes = {
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

export default Typing
