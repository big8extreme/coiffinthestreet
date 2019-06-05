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

class AppRouterannexe extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin/maraudes' component={Fichemaraude} />
        <Route exact path='/admin/users' component={Fichecoiffeur} />
        <Route exact path='/admin/participants' component={Ficheparticipant} />
        <Route exact path='/admin/api' component={Api} />
        <Route exact path='/admin/configuration' component={Ficheconfig} />
        <Route exact path='/admin/newusager' component={Newcoiffeur} />
        <Route exact path='/admin/newmaraude' component={Newmaraude} />
        <Route exact path='/admin/newparticipant' component={Newparticipant} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouterannexe));