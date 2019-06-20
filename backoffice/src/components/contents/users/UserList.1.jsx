import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputSwitch } from 'primereact/inputswitch';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../../../stores/actions/user';
import {
  Link
} from 'react-router-dom';
import Usernew from './UserNew';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedUser: null,
      onCreate: true,
      checked1: false
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-pencil" className="p-button-success" onClick={async () => {
        await this.setState({ selectedUser: rowData });
        this.toggleModal(false);
      }} style={{ marginRight: '.5em' }} > </Button>

      <Button icon="pi pi-times" className="p-button-danger" onClick={() => {
        this.props.deleteUser(rowData.id)
        this.props.fetchUsers();
      }}
        style={{ marginRight: '.5em' }} > </Button>
    </div>;
  }

  actionValid(rowData, column) {
    return <div>
      <InputSwitch checked={rowData.isActive} onClick={() => {this.changeStatus()}} />

    </div>;
  }

  toggleModal = (onCreate) => {
    this.setState({ modal: !this.state.modal, onCreate });
  }

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    return (
      <div>
        <TabView >
          <TabPanel header="Tous les Utilisateurs">

            <Fieldset legend="En cours">
              <div style={{ padding: '15px' }} > <Button onClick={() => this.toggleModal(true)} label="Ajouter un Coiffeur" className="p-button-warning  float-right" icon="pi pi-power-off" />
              </div>

              <DataTable value={this.props.users}>
                <Column field="lastName" header="Nom" />
                <Column field="firstName" header="Prenom" />
                <Column field="id" header="Ville" />
                <Column body={this.actionTemplate.bind(this)} style={{ textAlign: 'center', width: '12em' }} header="action" />
                <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }} header="actif" />
              </DataTable>
              <Usernew onCreate={this.state.onCreate} isOpen={this.state.modal} closeModal={this.closeModal} selectedUser={this.state.selectedUser} />
            </Fieldset>
          </TabPanel>

        </TabView>
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




