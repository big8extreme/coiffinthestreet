import React, { Component } from 'react';
<<<<<<< HEAD

import UserList from '../components/contents/users/UserList';
=======
import { TabView, TabPanel } from 'primereact/tabview';
import UserList from '../components/contents/users/userlist';
>>>>>>> 6c05dc517e3887bf223cc397a9da33238022e516

export default class UserPanel extends Component {
  render() {
    return (
      <div className="content-section implementation">
     
            <UserList />
     
      </div>
    );
  }
}