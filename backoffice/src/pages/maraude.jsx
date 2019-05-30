import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';


export default class Fichemaraude extends Component {


    constructor() {
        super();
        this.state = {
            cars: [
                {
                  date : "utile ou pas?",
                  start_at: "lien hypertexte vers fiche update " ,
                  place: "active",
                  author_id: "id, relation table nom"
                }, 
                {
               
                }, 
                {
                
                }
              ]
        };
        
    }

    componentDidMount() {
       
    }
    actionTemplate(rowData, column) {
      return <div>
        
         
          <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
          <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{marginRight: '.5em'}}></Button>
          <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>

      </div>;
  }

    render() {
        const columns = [
            {field: 'date', header: 'Creation'},
            {field: 'start_at', header: 'Date'},
            {field: 'place', header: 'Lieu'},
            {field: 'author_id', header: 'Coiffeur'}
        ];

        const dynamicColumns = columns.map((col,i) => {
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
                        <h1>Les maraudes</h1>
                        <p>Mise en place d'un texte de présentation...</p>
                    </div>
                </div>



                <div className="content-section implementation">


                <TabView>

                <TabPanel header="Maraudes du mois">
              <div>
                <Fieldset legend="En cours">

                  
                    <DataTable value={this.state.cars}>
                        <Column field="date" header="Creation" />
                        <Column field="start_at" header="Date" />
                        <Column field="place" header="Lieu" />
                        <Column field="author_id" header="Coiffeur" />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '12em'}}/>
                    </DataTable>
                    </Fieldset>
              </div>
            </TabPanel>
                

            <TabPanel header="Maraudes passées">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>

            <TabPanel header="Maraudes a venir">
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






