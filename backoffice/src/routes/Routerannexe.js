import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Fichecoiffeur from '../pages/coiffeur';
import Api from '../pages/api';
import { Newcoiffeur } from '../components/contents/newcoiffeur';
import Home from '../pages/Home';

class AppRouterannexe extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin/home' component={Home} />
        <Route exact path='/admin/users' component={Fichecoiffeur} />
        <Route exact path='/admin/api' component={Api} />
        <Route exact path='/admin/newusager' component={Newcoiffeur} />
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