import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputSwitch } from 'primereact/inputswitch';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../stores/actions/user';
import {
  Link
} from 'react-router-dom';
import Usernew from './UserNew';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedUser: null
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-pencil" className="p-button-success" onClick={async () => {
        await this.setState({ selectedUser: rowData });
        this.toggleModal();
      }} style={{ marginRight: '.5em' }} > </Button>

      <Button icon="pi pi-times" className="p-button-danger" onClick={() => {
        this.props.deleteUser(rowData.id)
        this.props.fetchUsers();
      }}
        style={{ marginRight: '.5em' }} > </Button>


    </div>;
  }
  //deleted soit pas link axios soit par component???
  handleClick(dd) {
    console.log(dd);
  }

  actionValid(rowData, column) {
    return <div>
      <InputSwitch checked={rowData.isActive} />
    </div>;
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  }

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    return (
      <div>

        <Fieldset legend="En cours">
          <p>Fiche Update coiffeur, Lien vers Particpants, </p>
          <button onClick={this.toggleModal}>Creer</button>
          <DataTable value={this.props.users}>
            <Column field="lastName" header="Nom" />
            <Column field="firstName" header="Prenom" />
            <Column field="id" header="Ville" />
            <Column body={this.actionTemplate.bind(this)} style={{ textAlign: 'center', width: '12em' }} header="action" />
            <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }} header="actif" />
          </DataTable>
          <Usernew isOpen={this.state.modal} closeModal={this.closeModal} selectedUser={this.state.selectedUser} />
        </Fieldset>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  users: state.user.users
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);




