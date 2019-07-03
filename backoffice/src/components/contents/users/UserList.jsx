import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { InputSwitch } from 'primereact/inputswitch';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser,updateUserStatut } from '../../../stores/actions/user';
import Usernew from './UserNew';

const defaultActive = {
  isActive: false
};

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedUser: null,
      onCreate: true,
      active: defaultActive,
      userId: ''
    };
    this.handleUserStateChange=this.handleUserStateChange.bind(this);
    this.actionValid=this.actionValid.bind(this);
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
    <InputSwitch name="isActive" value={rowData.isActive} checked={rowData.isActive} onChange={(event) => this.handleUserStateChange('isActive', rowData)} /> 
    </div>;
  }

  handleUserStateChange = async (field, rowData) => {
    rowData.isActive = !rowData.isActive;
    await this.setState( {isActive:rowData.isActive});
    await this.props.updateUserStatut({isActive:rowData.isActive},rowData.id );
  }

  toggleModal = (onCreate) => {
    this.setState({ modal: !this.state.modal, onCreate });
  }

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    let paginatorLeft = <Button icon="pi pi-refresh"/>;
    let paginatorRight = <Button icon="pi pi-cloud-upload"/>;

    return (
      <div>
        <TabView >
          <TabPanel header="Tous les Utilisateurs">

            <Fieldset legend="">
              <div style={{ padding: '15px' }} > <Button onClick={() => this.toggleModal(true)} label="Ajouter un Coiffeur" className="p-button-warning  float-right" icon="pi pi-power-off" />
              </div>

              <DataTable value={this.props.users}   paginator={true}  rows={5} rowsPerPageOptions={[5,10,20]}>
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
  deleteUser,
  updateUserStatut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);




