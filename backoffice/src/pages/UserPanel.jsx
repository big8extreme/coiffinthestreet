import React, { Component } from 'react';

import UserList from '../components/contents/users/UserList';

export default class UserPanel extends Component {
  render() {
    return (
      <div className="content-section implementation">
     
            <UserList />
     
      </div>
    );
  }
}