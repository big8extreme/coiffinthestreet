import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
import Axios from 'axios';
import MenuDemo from './contents/Menu';

import {
  Card, CardHeader, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import List from './Liste';
import Routerannexe from '../routes/Routerannexe';


export class Admin extends Component {
  render() {
    return (

      <React.Fragment>
<MenuDemo />
<Routerannexe />

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
