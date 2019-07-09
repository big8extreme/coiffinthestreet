import React, { Component } from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { fetchMaraudes, createMaraude, updateMaraude, deleteMaraude } from '../../../stores/actions/maraude';
import { connect } from 'react-redux';


class ListMaraudes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onMaraudeSelect = this.onMaraudeSelect.bind(this);
        this.addNew = this.addNew.bind(this);
      }
 
    componentDidMount() {
        this.props.fetchMaraudes();
    }
 
    save() {
        let maraudes = [...this.props.maraudes];
        if(this.newMaraude)
            maraudes.push(this.props.maraudes);
        else
            maraudes[this.findSelectedMaraudeIndex()] = this.props.maraudes;
            
            this.setState({maraudes:maraudes, selectedMaraude:null, maraude: null, displayDialog:false});
            console.log('BBBBBBBBBBB', this.state.maraude)
    
        }
 
    delete() {
        let index = this.findSelectedMaraudeIndex();
        this.setState({
            maraudes: this.props.maraudes.filter((val,i) => i !== index),
            selectedMaraude: null,
            maraude: null,
            displayDialog: false});
        this.props.deleteMaraude(this.state.maraude.id);
    }


    findSelectedMaraudeIndex() {
        return this.props.maraudes.indexOf(this.state.selectedMaraude);
    }


    updateProperty(property, value) {
        console.log('AAAAAAAAAAAAA', this.state.maraude)
        let maraude = this.state.maraude;
        maraude[property] = value;
        this.setState({maraude: this.state.maraude});
    }


    onMaraudeSelect(e){
        this.newMaraude = false;
        this.setState({
            displayDialog:true,
            maraude: Object.assign({}, e.data)
        });
    }

    addNew() {
        this.newMaraude = true;
        this.setState({
            maraude: {...this.state.maraudes},
            displayDialog: true
        });
    }
 
    render() {
        let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>Gestion des maraudes </div>;
 
        let footer = <div className="p-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} label="Ajouter" icon="pi pi-plus" onClick={this.addNew}/>
        </div>;
 
        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
                <Button label="Supprimer" icon="pi pi-times" onClick={this.delete}/>
                <Button label="Enregistrer" icon="pi pi-check" onClick={this.save}/>
            </div>;
 
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Gérer les maraudes</h1>
                        <p>Dashboard pour la gestion des maraudes</p>
                    </div>
                </div>
 
                <div className="content-section implementation">
                    <DataTable value={this.props.maraudes} paginator={true} rows={15}  header={header} footer={footer}
                               selectionMode="single" selection={this.state.selectedMaraude} onSelectionChange={e => this.setState({selectedMaraude: e.value})}
                               onRowSelect={this.onMaraudeSelect}>
                        <Column field="id" header="ID" sortable={true} />
                        <Column field="title" header="Titre de la maraude" sortable={true} />
                        <Column field="description" header="Description" sortable={true} />
                        <Column field="city" header="Ville" sortable={true} />
                        <Column field="longitude" header="Longitude" sortable={true} />
                        <Column field="latitude" header="Latitude" sortable={true} />
                        <Column field="isPublished" header="Publiée" sortable={true} />
                    </DataTable>
 
                    <Dialog visible={this.state.displayDialog} width="300px" header="Modifier / Enregistrer / Supprimer la maraude" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                        {
                            this.state.maraude && 
        
                            <div className="p-grid p-fluid">
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="Title">Titre</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="title" onChange={(e) => {this.updateProperty('title', e.target.value)}} value={this.state.maraude.title}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="Description">Description</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="longitude" onChange={(e) => {this.updateProperty('description', e.target.value)}} value={this.state.maraude.description}/>
                                </div>
 
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="City">Ville</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="city" onChange={(e) => {this.updateProperty('city', e.target.value)}} value={this.state.maraude.city}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="Longitude">Longitude</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="id" onChange={(e) => {this.updateProperty('longitude', e.target.value)}} value={this.state.maraude.longitude}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="Latitude">Latitude</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="id" onChange={(e) => {this.updateProperty('latitude', e.target.value)}} value={this.state.maraude.latitude}/>
                                </div>
                                
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="IsPublished">Publiée</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="id" onChange={(e) => {this.updateProperty('isPublished', e.target.value)}} value={this.state.maraude.isPublished}/>
                                </div>
                            </div>
                            
                        }
                    </Dialog>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    maraudes: state.maraude.maraudes
  });
  
  const mapDispatchToProps = {
    fetchMaraudes,
    createMaraude,
    updateMaraude,
    deleteMaraude
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListMaraudes);
