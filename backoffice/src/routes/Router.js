import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from '../components/Admin';
import { connect } from 'react-redux';
import LoginForm from '../components/Auth/LoginForm';
import PrivateRoute from './PrivateRoute';
import Fichemaraude from '../pages/maraude';
import Fichecoiffeur from '../pages/coiffeur';
import Api from '../pages/api';
import Ficheparticipant from '../pages/participant';
import Ficheconfig from '../pages/configuration';
import { Newcoiffeur } from '../components/contents/newcoiffeur';
import { Newmaraude } from '../components/contents/newmaraude';
import { Newparticipant } from '../components/contents/newparticipant';

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