import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import UserList from '../components/contents/users/userlist';

export default class UserPanel extends Component {
  render() {
    return (
      <div className="content-section implementation">
        <TabView >
          <TabPanel header="Tous les Utilisateurs">
            <UserList />
          </TabPanel>
        </TabView>
      </div>
    );
  }
}