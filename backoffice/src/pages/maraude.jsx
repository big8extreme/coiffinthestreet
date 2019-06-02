import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import { CoiffService } from '../components/CoiffService';
import {
  Link
} from 'react-router-dom';

export default class Fichemaraude extends Component {


    constructor() {
        super();
        this.state = {


          
        };
        this.coiffservice = new CoiffService(); 
    }

    componentDidMount() {
      this.coiffservice.getMaraudes().then(data => this.setState({ maraudes: data }));  
      console.log(this.state.maraudes)
    
    }



    actionTemplate(rowData, column) {
      return <div>
        
         
          <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
          <Link to={'/newmaraude'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
          <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>

      </div>;
  }

  actionValid(rowData, column) {
    return <div>
<Button type="button" icon="pi pi-key" className="p-button-" style={{marginRight: '.5em'}}></Button>
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
                        <h1>Les maraudes</h1>
                        <p>Mise en place d'un texte de présentation...</p>
                    </div>
                </div>



                <div className="content-section implementation">


                <TabView>

                <TabPanel header="Maraudes du mois">
              <div>
                <Fieldset legend="En cours">
<p> Date creation : utile ou pas? 
  // Lien hypertexte vers fiche update 
  // Nom du coiffeur (voir relation) 
   //Nombre de particiant
   // Bouton VALIDE MARAUDE</p>
           
                    <DataTable value={this.state.maraudes}>
                        <Column field="userId" header="Creation" />
                        <Column field="title" header="Date" />
                        <Column field="city" header="Lieu" />
                        <Column field="latitidue" header="Coiffeur" />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '12em'}}/>
                        <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }}  header="Participant"/>
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

            <TabPanel header="Maraudes a venir//valider ?">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel header="Photos en attente">
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






