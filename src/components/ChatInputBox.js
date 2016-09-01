import React , { PropTypes} from 'react';

class ChatInputBox extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      typing: false
    };

    this.changeState = this.changeState.bind(this);
    this.addMessage = this.addMessage.bind(this);

  }
  changeState(e) {
    this.setState({text: e.target.value, typing: true});

  }
  addMessage(e) {
    if (e.key == 'Enter') {
      e.preventDefault();
      const text = this.state.text.trim();
      this.setState({text: '', typing: false});
      this.props.addMessage(text);
  }
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <input type="text" className="form-control" ref="comment" placeholder="Type here"
              autoFocus="true" value = {this.state.text}
              onChange  = {this.changeState} onKeyDown = {this.addMessage} />
        </div>
      </div>
    </div>
  );
  }
}

ChatInputBox.propTypes = {
  addMessage : PropTypes.func.isRequired
};

export default ChatInputBox;
