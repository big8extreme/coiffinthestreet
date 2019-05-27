import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
import Axios from 'axios';

export class Admin extends Component {
  render() {
    return (
      <div>
        {/* // used to check if token is available */}
        <button
          onClick={() => {
            Axios.get('/users')
              .then(res => console.log(res))
              .catch(err => console.log(err));
          }}
        >FETCH USERS</button>
        <h1>IM IN ADMIN PANNEL</h1>
        <button
          onClick={() => this.props.logout()}
        >SIGN OUT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
