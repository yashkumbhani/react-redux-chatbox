import React, {  PropTypes } from 'react';
import TextBox from '../components/TextBox';
import Message from '../components/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/addMessages';

class ChatContainer extends React.Component {

  render() {
    return (
      <div>
      {this.props.messages.data.map(function(element,key){
        return (<Message key={key} text={element}/> );
      })}
        <TextBox addMessage={this.props.addMessage} />
      </div>
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
