import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import Response from './Response/Response';
import Typing from './Typing/Typing';


function MessageHistory(props) {
    const {list} = props;
    if (list.lenght === 0) return;

    const messageItems = list.map((item, index) => {
        return (
        <li key = {item.id}>
            {item.type === 'message' ? <Message from = {item.from} message = {item}/> :
            item.type === 'response' ? <Response from = {item.from} message = {item}/> :
            item.type === 'typing' ? <Typing from = {item.from} message = {item}/> : null}
        </li>
        )
    });

  return (
    <ul>
        {messageItems}
    </ul>
  )
}

MessageHistory.defaultProps = {
    list: [],
}

MessageHistory.propTypes = {
    list: PropTypes.instanceOf(Array),
}

export default MessageHistory