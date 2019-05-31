import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import { CoiffService } from '../components/CoiffService';


export default class Ficheuser extends Component {


    constructor() {
        super();
        this.state = {
        };
        this.coiffservice = new CoiffService();
    }

    componentDidMount() {
this.coiffservice.getParticipants().then(data => this.setState ({ participants : data}))
  }

    actionTemplate(rowData, column) {
      return <div>
          <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
          <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{marginRight: '.5em'}}></Button>
          <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
      </div>;
  }

    render() {
console.log(this.state.participants)
        return (
          <div className="layout-wrapper">
          <div className="layout-topbar">
          </div>
        <div className="layout-sidebar">
          <MenuDemo/>
        </div>

        <div className="layout-content">

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Les maraudes</h1>
                        <p>Mise en place d'un texte de présentation...</p>
                    </div>
                </div>

                <div className="content-section implementation">
                <TabView>
                <TabPanel header="Derniers Inscrits">
              <div>
                <Fieldset legend="En cours">

                  
                    <DataTable value={this.state.participants}>
                        <Column field="maraudeId" header="Nom" />
                        <Column field="email" header="Prenom" />
                        <Column field="job" header="ville" />
                        <Column field="createdAt" header="mail" />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '12em'}}/>
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






