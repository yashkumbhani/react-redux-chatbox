import React, { PropTypes } from 'react';

class Message extends React.Component {

  render(){
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

Message.propTypes = {
  text : PropTypes.string
};
  
export default Message;
