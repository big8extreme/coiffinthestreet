import React, { Component } from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import {
  fetchMaraudes,
  createMaraude,
  updateMaraude,
  deleteMaraude,
  deletePicture
} from "../../../stores/actions/maraude";
import { clearFieldValues } from "../../../utils/document";
import "./ListMaraudes.scss";
import moment from 'moment';
import 'moment/locale/fr'
import {Calendar} from 'primereact/calendar';

moment.locale('fr')

const defaultMaraude = {
  title: '',
  description: '',
  startAt: '',
  startDate: '',
  city: '',
  longitude: '',
  latitude: ''
};

class ListMaraudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maraude: defaultMaraude,
      onCreate: true,
      globalFilter: null,
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
    const currentMaraude = this.props.maraudes.filter(
      maraude => maraude.id === this.state.maraude.id
    )[0];
    if (currentMaraude) {      
      const currentPhotos = currentMaraude.photos;
      const prevPhotos = this.state.maraude.photos;
      if (
        currentPhotos &&
        prevPhotos &&
        prevPhotos.length !== currentPhotos.length
      ) {
        this.setState({ ...this.state, maraude: { ...currentMaraude } });
      }
    }
  }

  save() {
    const {maraude} = this.state;
    if (this.state.onCreate) {
      this.props.createMaraude(maraude);
    } else {

      if(maraude.startDate === "" || maraude.startDate === undefined){
        maraude.startDate = maraude.startAt
      }
      // FIX ME CONDTION IT'S THE SAME FIRST CONDITION 
      if(maraude.startDate === "" || maraude.startDate === undefined){
        maraude.startDate = maraude.endAt
      }
      this.props.updateMaraude(maraude, maraude.id);
    }
    this.resetState();
  }

  resetState() {
    this.setState({
      onCreate: true,
      maraude: defaultMaraude,
      displayDialog: false, 
    });
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
    this.setState({
      ...this.state,
      maraude: { ...this.state.maraude, [property]: value }
    });
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
      displayDialog: true,
      onCreate: true
    });
  }

  actionTemplate = (item) => {
    return <div>
        <Button type="button" icon="pi pi-pencil" className="p-button-success" style={{marginRight: '.5em'}}></Button>
        <Button type="button" icon="pi pi-times" className="p-button-danger" onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          const confirm = window.confirm('Confirmez la suppression')
          if(confirm){
            this.props.deleteMaraude(item.id)
          }
        }}></Button>
    </div>;
  }

startAtTemplate(item){
  return (
    <p>{moment(item.startAt).format('HH:mm')}</p>
  )
}
endAtTemplate(item){
  return (
    <p>{moment(item.endAt).format('HH:mm')}</p>
  )
}

startAtTemplateDate(item){
  return (
    <p>{moment(item.startAt).format('DD/MM/YYYY')}</p>
  )
}
endAtTemplateDate(item){
  return (
    <p>{moment(item.endAt).format('DD/MM/YYYY')}</p>
  )
}

dialogFooter = () => {
  const labelButton = this.state.onCreate ? "Ajouter" : "Modifier";
  return (
    <div className="ui-dialog-buttonpane p-clearfix">
    <Button label={labelButton} icon="pi pi-check" className="p-button-warning" onClick={() => {
      this.save()
      }} />
  </div>
  )
}

  render() {
    let header = (
      <div className="p-clearfix" style={{ lineHeight: "2.97em", fontSize:"1.2em" }}>
      <div className="row subtitle-maraude">
      <div className="col-3 search-bar"><i className="pi pi-search search-bar"></i><InputText  type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Recherche" size="20"/></div>
      <div className="col-9 add-maraude">
      <Button
      style={{ float: "left" }}
      label="Ajouter une maraude"
      icon="pi pi-plus"
      onClick={this.addNew}
      className="p-button-warning"
    />
    </div>
      </div> 
      </div>
    );

    return (
      <div>
      <div id="containerListMaraudes">
        <div className="content-section header">
          <div className="feature-intro">
            <h3>Gérer les maraudes</h3>
          </div>
        </div>

        <div className="content-section implementation">
          <DataTable
            value={this.props.maraudes}
            paginator={true}
            rows={15}
            header={header}
            selectionMode="single"
            selection={this.state.maraude}
            onSelectionChange={e => this.setState({ maraude: e.value })}
            onRowSelect={this.onMaraudeSelect}
            className="datable-td"
            globalFilter={this.state.globalFilter}
          >
          <Column field="id" header="ID" className="width-id" sortable={true} />
            <Column field="title" header="Titre de la maraude" sortable={true} />
            <Column field="description" header="Description" sortable={true} />
            <Column field="startAt" header="Date" sortable={true} body={this.startAtTemplateDate} />
            <Column field="startAt" header="Heure de début" sortable={true} body={this.startAtTemplate} />
            <Column field="endAt" header="Heure de fin" sortable={true} body={this.endAtTemplate} />
            <Column field="city" header="Ville" sortable={true} />
            <Column field="longitude" header="Longitude" sortable={true} />
            <Column field="latitude" header="Latitude" sortable={true} />
            <Column field="action" header="Action" sortable={true} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
          </DataTable>

          <Dialog
            visible={this.state.displayDialog}
            header="Ajouter / Modifier"
            closeOnEscape
            footer={this.dialogFooter()}
            onHide={() => {
              this.setState({
                ...this.state,
                displayDialog: false,
                onCreate: true,
                maraude: {}
              });
              clearFieldValues([
                "title",
                "description",
                "city",
                "startAt",
                "endAt",
                "longitude",
                "latitude"
              ]);
            }}
          >
            {this.state.maraude && (
              <div className="row list-maraudes">
                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="Title">Titre</label>
                </div>
                <InputText
                  id="title"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("title", e.target.value);
                  }}
                  value={this.state.maraude.title}
                />

                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="Description">Description</label>
                </div>
                <InputTextarea
                  id="description"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("description", e.target.value);
                  }}
                  value={this.state.maraude.description}
                />

                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="startDate">Début de la maraude</label>
                </div>
                <InputText
                  id="startDate"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("startDate", e.target.value);
                  }}
                  type="date"
                  value={this.state.maraude.startDate || moment(this.state.maraude.startAt).format('YYYY-MM-DD')}
                />
                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="startAt">Heure de début</label>
                </div>
                  <Calendar className="col-8" value={this.state.maraude.startAt ? new Date(this.state.maraude.startAt) : new Date()} onChange={(e) => 
                  this.updateProperty("startAt", e.value)                 
                  } timeOnly={true} hourFormat="24" />
                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="startAt">Heure de fin</label>
                </div>
                  <Calendar className="col-8" value={this.state.maraude.endAt ? new Date(this.state.maraude.endAt) : new Date()} onChange={(e) => 
                  this.updateProperty("endAt", e.value)                 
                  } timeOnly={true} hourFormat="24" />
                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="City">Ville</label>
                </div>
                <InputText
                  id="city"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("city", e.target.value);
                  }}
                  value={this.state.maraude.city}
                />

                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="Longitude">Longitude</label>
                </div>
                <InputText
                  id="longitude"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("longitude", e.target.value);
                  }}
                  value={this.state.maraude.longitude}
                />

                <div
                  className="col-3 item-maraude"
                  style={{ padding: ".75em" }}
                >
                  <label htmlFor="Latitude">Latitude</label>
                </div>
                <InputText
                  id="latitude"
                  className="col-8"
                  onChange={e => {
                    this.updateProperty("latitude", e.target.value);
                  }}
                  value={this.state.maraude.latitude}
                />

                <div className="col-12">
                  {this.state.maraude.photos && (
                    <div className="item-photos-maraudes">
                      <div className="col-3" style={{ padding: ".75em" }}>
                        <label htmlFor="Photos">Photos</label>
                      </div>
                      {this.state.maraude.photos.map((photo, idx) => {
                        return (
                          <div className="maraude-photo" key={`photo-${idx}`}>
                            <div
                              className=""
                              onClick={() => {
                                this.props.deletePicture(photo.id);
                              }}
                            >
                              <button className="destroyer">&times;</button>
                            </div>
                            <img
                              alt={`${this.state.maraude.title}-${idx}`}
                              src={photo.url}
                              width="100px"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </Dialog>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  maraudes: state.maraude.maraudes
});

const mapDispatchToProps = {
  fetchMaraudes,
  createMaraude,
  updateMaraude,
  deleteMaraude,
  deletePicture
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMaraudes);