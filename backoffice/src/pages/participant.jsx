import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import { CoiffService } from '../components/CoiffService';
import { InputSwitch } from 'primereact/inputswitch';
import {
  Link
} from 'react-router-dom';

export default class Ficheparticipant extends Component {


  constructor() {
    super();
    this.state = {
    };
    this.coiffservice = new CoiffService();
  }

  componentDidMount() {
    this.coiffservice.getParticipants().then(data => this.setState({ participants: data }))
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
      <Link to={'/newparticipant/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }

  actionValid(rowData, column) {
    return <div>
      <InputSwitch onLabel="Yes" />
    </div>;
  }

  render() {
    console.log(this.state.participants)
    return (
      <div className="layout-wrapper">
        <div className="layout-topbar">
        </div>
        <div className="layout-sidebar">
          <MenuDemo />
        </div>

        <div className="layout-content">

          <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Les Participants</h1>
              <p>Mise en place d'un texte de présentation...</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Derniers Inscrits">
                <div>
                  <Fieldset legend="En cours">
                    <p>Manque Nom, prenom, un tel peut etre pour intervention urgente, </p>

                    <DataTable value={this.state.participants}>
                      <Column field="maraudeId" header="Nom Maraude??" />
                      <Column field="maraudeId" header="Nom" />
                      <Column field="email" header="Prenom" />
                      <Column field="job" header="ville" />
                      <Column field="createdAt" header="mail" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }} />
                      <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }} header="actif" />
                    </DataTable>
                  </Fieldset>
                </div>
              </TabPanel>

              <TabPanel header="attente de validation">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>

              <TabPanel header="Users bannis">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>
            </TabView>
          </div>

        </div>
      </div>
    );
  }
}






