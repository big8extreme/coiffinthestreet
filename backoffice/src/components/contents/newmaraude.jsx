
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import MenuDemo from './Menu';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import axios from 'axios';

export class Newmaraude extends Component {
    constructor() {
        super();
        this.state = {
            maraude:'',
            userId: '',
            title: '',
            startAt: '',
            endAt:'',
            description:'',
            isPublished: '',
            longitude: '',
            latitude: ''
       
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    submitForm = event => {
        event.preventDefault();

        const maraude = {
            userId: this.state.userId,
            title: this.state.title,
            startAt: this.state.startAt,
            endAt:this.state.endAt,
            description:this.state.description,
            isPublished: this.state.isPublished,
            longitude: this.state.longitude,
            latitude: this.state.latitude
           };
       
       axios.post('http://localhost:3000/maraudes', { maraude })
          .then(res => {
            console.log(res);
              console.log(res.data);
          })
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
                            <h1>Ajouter une maraude</h1>
                            <p>    Absent du controleur  et du models:createdAt  updatedAt, probleme d'insertion Date  ALTER TABLE Maraudes MODIFY updatedAt datetime  NULL DEFAULT '1970-01-02';
</p>
                           
                        </div>
                    </div>

                    <div>
                        <div className="content-section implementation inputgrid-demo">
                            <div className="p-grid p-fluid">



                                <Form onSubmit={this.submitForm}>


                               
                                <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="userId" name="userId" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="titre" name="titre" onChange={this.handleChange} />
                                        </div>
                                    </div>


                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Date de demarrage" name="startAt" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Fin de l'evenement"  name="endAt" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="description" name="description" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="city" name="city" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Prenom" name="lastName" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-4 p-md-4">
                                        <div>isPublished<InputSwitch onLabel="Yes" name="isPublished" onChange={this.handleChange} /></div>
                                    </div>




                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="longitude" name="longitude" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="latitude" name="latitude" onChange={this.handleChange} />
                                        </div>
                                    </div>





                                 


                                    <div>
                                        <Button type="submit" value="Envoyer" >Submit</Button>
                                    </div>
                                </Form>






                            </div>
                        </div>













                    </div>
                </div>
            </div>



        );
    }
}