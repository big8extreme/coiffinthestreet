import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import axios from 'axios';

export default class Fichecoiffeur extends Component {


  constructor() {
    super();
    this.state = {
      users: []
    };

  }

  componentDidMount() {
      axios
    .get('http://localhost:3000/users', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
  })
      .then(res => {
        const users = res.data;
        this.setState({ users });
    
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


                    <DataTable value={this.state.users}>
                      <Column field="email" header="Nom" />
                      <Column field="email" header="Prenom" />
                      <Column field="email" header="ville" />
                      <Column field="email" header="ville"/>
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






