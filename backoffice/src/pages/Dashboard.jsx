import React, { Component } from 'react';
import NavPanel from '../components/navpanel';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="flex-row">
        <NavPanel />
      </div>
    );
  }
}
