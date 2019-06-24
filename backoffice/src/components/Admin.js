import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
import MenuLeft from './contents/menuleft';
import AdminRouter from '../routes/AdminRouter';

export class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout-wrapper">
          <div className="layout-topbar">
          </div>
          <div className="layout-sidebar">
            <MenuLeft />
          </div>
          <div className="layout-content">
            <AdminRouter />
            <div className="layout-footer">
            </div>
          </div>
        </div>
      </React.Fragment >
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
