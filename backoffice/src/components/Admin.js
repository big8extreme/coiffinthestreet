import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
import MenuDemo from './contents/Menu';
import Routerannexe from '../routes/Routerannexe';

export class Admin extends Component {
  render() {
    return (

      <React.Fragment>

        <div className="layout-wrapper">

          <div className="layout-topbar">
          </div>

          <div className="layout-sidebar">
            <MenuDemo />
          </div>

          <div className="layout-content">
          <Routerannexe />
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
