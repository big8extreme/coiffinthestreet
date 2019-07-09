import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { fetchMaraudes, createMaraude, updateMaraude, deleteMaraude, deletePicture } from '../../../stores/actions/maraude';
import { clearFieldValues } from '../../../utils/document';

const defaultMaraude = {

};

class ListMaraudes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maraude: defaultMaraude,
            onCreate: true,
        };
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onMaraudeSelect = this.onMaraudeSelect.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    componentDidMount() {
        this.props.fetchMaraudes();
    }

    componentDidUpdate() {
        const currentMaraude = this.props.maraudes.filter(maraude => maraude.id === this.state.maraude.id)[0];
        if (currentMaraude) {
            const currentPhotos = currentMaraude.photos;
            const prevPhotos = this.state.maraude.photos;
            if ((currentPhotos && prevPhotos) && (prevPhotos.length !== currentPhotos.length)) {
                this.setState({ ...this.state, maraude: { ...currentMaraude } });
            }
        }
    }

    save() {
        if (this.state.onCreate) {
            this.props.createMaraude(this.state.maraude);
        } else {
            this.props.updateMaraude(this.state.maraude, this.state.maraude.id);
        }
        this.resetState();
    }

    resetState() {
        this.setState({ onCreate: true, maraude: defaultMaraude, displayDialog: false });
    }

    delete() {
        let index = this.findSelectedMaraudeIndex();
        this.setState({
            maraudes: this.props.maraudes.filter((val, i) => i !== index),
            maraude: null,
            displayDialog: false
        });
        this.props.deleteMaraude(this.state.maraude.id);
    }


    findSelectedMaraudeIndex() {
        return this.props.maraudes.indexOf(this.state.selectedMaraude);
    }


    updateProperty(property, value) {
        this.setState({ ...this.state, maraude: { ...this.state.maraude, [property]: value } });
    }


    onMaraudeSelect(e) {
        this.newMaraude = false;
        this.setState({
            displayDialog: true,
            maraude: { ...e.data },
            onCreate: false
        });
    }

    addNew() {
        this.newMaraude = true;
        this.setState({
            maraude: { ...defaultMaraude },
            displayDialog: true
        });
    }

    render() {
        console.log('RENDER', this.state);
        const labelButton = this.state.onCreate ? 'Ajouter' : 'Modifier';
        let header = <div className="p-clearfix" style={{ lineHeight: '1.87em' }}>Gestion des maraudes </div>;

        let footer = <div className="p-clearfix" style={{ width: '100%' }}>
            <Button style={{ float: 'left' }} label="Ajouter" icon="pi pi-plus" onClick={this.addNew} />
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            {
                !this.state.onCreate &&
                <Button label="Supprimer" icon="pi pi-times" onClick={this.delete} />
            }
            <Button label={labelButton} icon="pi pi-check" onClick={this.save} />
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
                    <DataTable value={this.props.maraudes} paginator={true} rows={15} header={header} footer={footer}
                        selectionMode="single" selection={this.state.maraude} onSelectionChange={e => this.setState({ maraude: e.value })}
                        onRowSelect={this.onMaraudeSelect}>
                        <Column field="id" header="ID" sortable={true} />
                        <Column field="title" header="Titre de la maraude" sortable={true} />
                        <Column field="description" header="Description" sortable={true} />
                        <Column field="city" header="Ville" sortable={true} />
                        <Column field="longitude" header="Longitude" sortable={true} />
                        <Column field="latitude" header="Latitude" sortable={true} />
                    </DataTable>

                    <Dialog visible={this.state.displayDialog} header="Modifier / Enregistrer / Supprimer la maraude" footer={dialogFooter} onHide={() => {

                        this.setState({ ...this.state, displayDialog: false, onCreate: true, maraude: {} });
                        clearFieldValues(['title', 'description', 'city', 'longitude', 'latitude']);
                    }}>
                        {
                            this.state.maraude &&

                            <div className="p-grid p-fluid">
                                <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="Title">Titre</label></div>
                                <div className="p-col-8" style={{ padding: '.5em' }}>
                                    <InputText id="title" onChange={(e) => { this.updateProperty('title', e.target.value); }} value={this.state.maraude.title} />
                                </div>

                                <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="Description">Description</label></div>
                                <div className="p-col-8" style={{ padding: '.5em' }}>
                                    <InputText id="description" onChange={(e) => { this.updateProperty('description', e.target.value); }} value={this.state.maraude.description} />
                                </div>

                                <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="City">Ville</label></div>
                                <div className="p-col-8" style={{ padding: '.5em' }}>
                                    <InputText id="city" onChange={(e) => { this.updateProperty('city', e.target.value); }} value={this.state.maraude.city} />
                                </div>

                                <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="Longitude">Longitude</label></div>
                                <div className="p-col-8" style={{ padding: '.5em' }}>
                                    <InputText id="longitude" onChange={(e) => { this.updateProperty('longitude', e.target.value); }} value={this.state.maraude.longitude} />
                                </div>

                                <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="Latitude">Latitude</label></div>
                                <div className="p-col-8" style={{ padding: '.5em' }}>
                                    <InputText id="latitude" onChange={(e) => { this.updateProperty('latitude', e.target.value); }} value={this.state.maraude.latitude} />
                                </div>

                                {
                                    this.state.maraude.photos &&
                                    <div className="maraude-photos">
                                        {
                                            this.state.maraude.photos.map((photo, idx) => {
                                                return (
                                                    <div className="maraude-photo" key={`photo-${idx}`}>
                                                        <div
                                                            onClick={() => {
                                                                this.props.deletePicture(photo.id);
                                                            }}
                                                            className="destroyer"
                                                            style={{ position: 'relative', width: 10, height: 10, backgroundColor: 'red', cursor: 'pointer', top: 10, right: 10 }}>

                                                        </div>
                                                        <img alt={`${this.state.maraude.title}-${idx}`} src={photo.url} width="100" />
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                }
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
    deleteMaraude,
    deletePicture
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMaraudes);
