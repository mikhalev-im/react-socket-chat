import React from 'react';

const ChatForm = ({message, handleMessageChange, handleSendClick, messageList, chatRef}) => {
  let rows = [];
  messageList.forEach( (el, index) => (
    rows.push(<p key={index} className="message"><span className="author">{el.author}:</span> {el.message}</p>)
  ));

  return (<div className="form">
    <div className="chat-window" ref={chatRef}>
      {rows}
    </div>
    <input type='text' onKeyUp={handleSendClick} onChange={handleMessageChange} value={message} placeholder='message' />
    <button onClick={handleSendClick}>send</button>
  </div>);
}

export default ChatForm;