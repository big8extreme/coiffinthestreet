import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import UserPanel from '../pages/UserPanel';
import { Userdel } from '../components/contents/users/userdel';
import { Userupdate } from '../components/contents/users/userupdate';

class AdminRouter extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin' component={Dashboard} />
        <Route exact path='/admin/users' component={UserPanel} />
        <Route exact path='/admin/usersup/:id' component={Userdel} />
        <Route exact path='/admin/usermod/:id' component={Userupdate} />
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