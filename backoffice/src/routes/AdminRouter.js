import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import UserPanel from '../pages/UserPanel';

class AdminRouter extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin' component={Dashboard} />
        <Route exact path='/admin/users' component={UserPanel} />
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