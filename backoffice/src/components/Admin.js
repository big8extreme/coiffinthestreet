import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
<<<<<<< HEAD
import MenuLeft from './contents/MenuLeft';
=======
import MenuLeft from './contents/Menuleft';
>>>>>>> b646d2c10c3f9e9f13adc9783ca46bc9b18e67e0
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
