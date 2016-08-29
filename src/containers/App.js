import React, {  PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
       <div>
        {React.cloneElement(this.props.children, this.props)}
       </div>
    );
  }
}

App.propTypes = {
  children:  PropTypes.element.isRequired
};
function mapStateToProps(state) {
  return {
    data: state.data
  };
}


export default connect(mapStateToProps)(App);
