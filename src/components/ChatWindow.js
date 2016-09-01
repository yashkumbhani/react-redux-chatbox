import React , { PropTypes } from 'react';
import Message from './Message';

const ChatWindow = ({messages}) => (
 <div>
 {messages.data.map(function(element,key){
   return (<Message key={key} text={element}/> );
 })}
 </div>
);

ChatWindow.PropTypes = {
  messages : PropTypes.object.isRequired
};

export default ChatWindow;
