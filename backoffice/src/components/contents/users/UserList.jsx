import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { TabView, TabPanel } from "primereact/tabview";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { connect } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  updateUserStatut
} from "../../../stores/actions/user";
import Usernew from "./UserNew";

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
      userId: ""
    };
    this.handleUserStateChange = this.handleUserStateChange.bind(this);
    this.actionValid = this.actionValid.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  actionTemplate(rowData, column) {
    return (
      <div>
        <Button
          type="button"
          icon="pi pi-pencil"
          className="p-button-success"
          onClick={async () => {
            await this.setState({ selectedUser: rowData });
            this.toggleModal(false);
          }}
          style={{ marginRight: ".5em" }}
        >
          {" "}
        </Button>

        <Button
          icon="pi pi-times"
          className="p-button-danger"
          onClick={() => {
            this.props.deleteUser(rowData.id);
            const result = window.confirm("Confirmez la suppression");
            if (result) {
              this.props.deleteUser(rowData.id);
            }
            this.props.fetchUsers();
          }}
          style={{ marginRight: ".5em" }}
        >
          {" "}
        </Button>
      </div>
    );
  }

  actionPicture(rowData, column) {
    return (
      <div>
        <img alt={rowData.firstName} src={rowData.avatarUrl} width="50px" />
      </div>
    );
  }

  actionValid(rowData, column) {
    return (
      <div>
        <InputSwitch
          name="isActive"
          value={rowData.isActive}
          checked={rowData.isActive}
          onChange={event => this.handleUserStateChange("isActive", rowData)}
        />
      </div>
    );
  }

  handleUserStateChange = async (field, rowData) => {
    rowData.isActive = !rowData.isActive;
    await this.setState({ isActive: rowData.isActive });
    await this.props.updateUserStatut(
      { isActive: rowData.isActive },
      rowData.id
    );
  };

  toggleModal = onCreate => {
    this.setState({ modal: !this.state.modal, onCreate });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-section header">
          <div className="feature-intro">
            <h3>Gérer les utilisateurs</h3>
          </div>
          <div>
            <div className="row subtitle-user">
              <div className="col-3 search-bar">
                <i className="pi pi-search search-bar user" />
                <InputText
                  type="search"
                  onInput={e => this.setState({ globalFilter: e.target.value })}
                  placeholder="Recherche"
                  size="20"
                />
              </div>
              <div className="col-9 add-maraude">
                <Button
                  style={{ float: "right" }}
                  label="Ajouter un coiffeur"
                  icon="pi pi-plus"
                  onClick={() => this.toggleModal(true)}
                  className="p-button-warning"
                />
              </div>
            </div>
            <DataTable
              value={this.props.users}
              paginator={true}
              rows={10}
              rowsPerPageOptions={[5, 10, 20]}
            >
              <Column
                body={this.actionPicture.bind(this)}
                style={{ textAlign: "center", width: "12em" }}
                header="Avatar"
              />
              <Column field="lastName" header="Nom" />
              <Column field="firstName" header="Prénom" />
              <Column field="email" header="Email" />
              <Column
                body={this.actionTemplate.bind(this)}
                style={{ textAlign: "center", width: "12em" }}
                header="Action"
              />
              <Column
                body={this.actionValid}
                style={{ textAlign: "center", width: "5em" }}
                header="Actif"
              />
            </DataTable>
            <Usernew
              onCreate={this.state.onCreate}
              isOpen={this.state.modal}
              closeModal={this.closeModal}
              selectedUser={this.state.selectedUser}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  updateUserStatut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);