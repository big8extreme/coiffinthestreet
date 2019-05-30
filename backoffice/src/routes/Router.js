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

class AppRouter extends Component {
  render() {
    const { user } = this.props.authentification;
    return (
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <PrivateRoute isAdmin={user.isAdmin} exact path='/admin' component={Admin} />
        <PrivateRoute isAdmin={user.isAdmin} exact path='/maraudes' component={Fichemaraude} />
        <PrivateRoute isAdmin={user.isAdmin} exact path='/coiffeurs' component={Fichecoiffeur} />
        <PrivateRoute isAdmin={user.isAdmin} exact path='/participants' component={Ficheparticipant} />
        <PrivateRoute isAdmin={user.isAdmin} exact path='/api' component={Api} />
     
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