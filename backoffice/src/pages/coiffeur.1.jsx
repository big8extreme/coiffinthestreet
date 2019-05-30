import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import Axios from 'axios';

export default class Fichecoiffeur extends Component {


  constructor() {
    super();
    this.state = {
      cars: []
    };

  }

  componentDidMount() {
    Axios.get('/users')
      .then(res => {
        const cars = res.data;
        this.setState({ cars });
      })
  }


  actionTemplate(rowData, column) {
    return <div>


      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
      <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>

    </div>;
  }

  render() {
    const columns = [
      { field: 'lastname', header: 'Nom' },
      { field: 'firstname', header: 'Prenom' },
      { field: 'father_code', header: 'ville' },
      { field: 'mail', header: 'mail' }
    ];

    const dynamicColumns = columns.map((col, i) => {
      return <Column key={col.field} field={col.field} header={col.header} />;
    });

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
              <h1>Les Coiffeurs</h1>
              <p>Mise en place d'un texte de présentation...</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Derniers Inscrits">
                <div>
                  <Fieldset legend="En cours">


                    <DataTable value={this.state.cars}>
                      <Column field="lastname" header="Nom" />
                      <Column field="firstname" header="Prenom" />
                      <Column field="father_code" header="ville" />
                      <Column field="mail" header="mail" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }} />
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

              <TabPanel header="Coiffeurs bannis">
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






