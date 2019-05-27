import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Admin extends Component {
  render() {
    return (
      <div>
        <h1>IM IN ADMIN PANNEL</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {

};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
