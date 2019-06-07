import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Api from '../pages/api';
import Home from '../pages/Home';
import Hairdresser from '../pages/hairdresser';
import { Hairdressernew } from '../components/contents/hairdressernew';

class AppRouterannexe extends Component {
  render() {

    return (
      <Switch>
        <Route exact path='/admin' component={Home} />
        <Route exact path='/admin/users' component={ Hairdresser } />
        <Route exact path='/admin/api' component={Api} />
        <Route exact path='/admin/usernew' component={Hairdressernew} />
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