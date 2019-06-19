import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { UsersService } from './usersService';
import { InputSwitch } from 'primereact/inputswitch';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../stores/actions/user';

class UserList extends Component {


  componentDidMount() {

    this.props.fetchUsers();
  }


  render() {
    console.log('from users', this.props);
    return (
      <div></div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  fetchUsers
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);