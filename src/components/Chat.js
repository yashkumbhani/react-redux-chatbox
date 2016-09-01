import React, { PropTypes } from 'react';
import Message from './Message';
import ChatInputBox from './ChatInputBox';


class Chat extends React.Component {

  componentDidMount() {
    const { socket, dispatch } = this.props;
    socket.emit('new message','Hi');
  }

  render() {
    return (
      <div>
      {this.props.messages.data.map(function(element,key){
        return (<Message key={key} text={element}/> );
      })}
        <ChatInputBox addMessage={this.props.addMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  addMessage : PropTypes.func.isRequired,
  dispatch : PropTypes.func.isRequired,
  messages : PropTypes.object,
  socket : PropTypes.object.isRequired
};

export default Chat;
