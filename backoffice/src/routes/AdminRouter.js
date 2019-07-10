import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import UserPanel from '../pages/UserPanel';
import ConfigPage from '../pages/ConfigPage';
import DocApi from '../pages/DocApi';
import MaraudesPanel from '../pages/MaraudesPanel';
class AdminRouter extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin' component={Dashboard} />
        <Route exact path='/admin/maraudes' component={MaraudesPanel} />
        <Route exact path='/admin/users' component={UserPanel} />
        <Route exact path='/admin/maraudes' component={MaraudesPanel} />
        <Route exact path='/admin/configs' component={ConfigPage} />
        <Route exact path='/admin/docapi' component={DocApi} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {

};

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminRouter));