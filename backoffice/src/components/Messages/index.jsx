import React, { Component } from 'react';

import { connect } from 'react-redux';
import { resetMessage } from '../../stores/actions/app';
import { Alert } from 'reactstrap';

class index extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.messages.length >= 1) {
      setTimeout(() => {
        this.props.resetMessage();
      }, 3000);
    }
  }

  render() {
    return (
      <div style={{ position: 'fixed', zIndex: 999999, width: '100vw' }}>
        {
          this.props.messages.map((message, idx) => {
            return <Alert key={`message-${idx}`} color={message.color}>
              {message.message}
            </Alert>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.app.messages
});

const mapDispatchToProps = {
  resetMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(index);



