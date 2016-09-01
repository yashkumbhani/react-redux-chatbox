import React, { PropTypes } from 'react';
import Message from './Message';
import ChatInputBox from './ChatInputBox';


class Chat extends React.Component {

  componentDidMount() {
    const { socket, dispatch } = this.props;
    socket.on('new bc message',message => {
      console.log('---receiveMessage on client ---' , message)
      this.props.receiveMessage(message);
    });
  }

  render() {
    return (
      <div>
      {this.props.messages.data.map(function(element,key){
        return (<Message key={key} text={element}/> );
      })}
        <ChatInputBox addMessage={this.props.addMessage} socket={this.props.socket} activeChannel = {'Lobby'} />
      </div>
    );
  }
}

Chat.propTypes = {
  addMessage : PropTypes.func.isRequired,
  dispatch : PropTypes.func.isRequired,
  messages : PropTypes.object,
  receiveMessage : PropTypes.func,
  socket : PropTypes.object.isRequired
};

export default Chat;
