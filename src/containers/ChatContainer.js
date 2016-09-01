import React, {  PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/addMessages';
import io from 'socket.io-client';
import Chat from '../components/Chat';

const socket = io('http://localhost:3000', { path: '/api/chat' });


class ChatContainer extends React.Component {

  render() {
    return (
        <Chat { ...this.props} socket={socket} />
    );
  }
}

ChatContainer.propTypes = {
  addMessage : PropTypes.func.isRequired,
  messages : PropTypes.object
};

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function mapStatetoProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStatetoProps, mapDispachToProps)(ChatContainer);
