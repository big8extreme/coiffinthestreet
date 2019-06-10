import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { UsersService } from './usersService';
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
import { Userdel } from './userdel';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.userservice = new UsersService();
  }

  componentDidMount() {
    this.userservice.getUsers().then(data => this.setState({ users: data }));
  }

  actionTemplate(rowData, column) {
    return <div>
       <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
      <Link to={'/admin/users/'+rowData.id}><Button type="button" icon="pi pi-pencil" className="p-button-warning" placeholder={rowData.id} style={{ marginRight: '.5em' }}></Button></Link>
       <Button type="button" icon="pi pi-times" className="p-button-danger" onClick={() => this.handleClick(rowData.id)}  > </Button>
        </div>;
  }

handleClick(dd){
  return <div>
  <Userdel selecUser={dd} />
</div>;
} 

handleClock(dd){
  return <div>
  <Userdel selecUser={dd} />
  </div>;
} 

actionValid(rowData, column) {
    return <div>
      <InputSwitch onLabel="Yes" />
    </div>;
  }

  render() {
    return (
      <div>
          
        <Fieldset legend="En cours">
          <p>Fiche Update coiffeur, Lien vers Particpants, </p>
          <DataTable value={this.state.users}>
            <Column field="lastName" header="Nom" />
            <Column field="firstName" header="Prenom" />
            <Column field="id" header="Ville"  />
            <Column field="email" header="mail" />
           <Column body={this.actionTemplate.bind(this)} style={{ textAlign: 'center', width: '12em' }} header="action" />
            <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }} header="actif" />
          </DataTable>
        </Fieldset>
      </div>
    );
  }
}






