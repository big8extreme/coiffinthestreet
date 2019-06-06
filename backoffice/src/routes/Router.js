import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from '../components/Admin';
import { connect } from 'react-redux';
import LoginForm from '../components/Auth/LoginForm';
import PrivateRoute from './PrivateRoute';


class AppRouter extends Component {
  render() {
    const { user } = this.props.authentification;
    return (
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <PrivateRoute isAdmin={user.isAdmin} path='/admin' component={Admin} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));