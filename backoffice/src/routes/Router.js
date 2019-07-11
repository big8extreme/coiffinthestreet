import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from '../components/Admin';
import { connect } from 'react-redux';
import LoginForm from '../components/Auth/LoginForm';
import PrivateRoute from './PrivateRoute';
import Messages from '../components/Messages';

class AppRouter extends Component {
  render() {
    const { user } = this.props.authentification;
    return (
      <React.Fragment>
        <Messages />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <PrivateRoute isAdmin={user.isAdmin} path='/admin' component={Admin} />
        </Switch>
      </React.Fragment>
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