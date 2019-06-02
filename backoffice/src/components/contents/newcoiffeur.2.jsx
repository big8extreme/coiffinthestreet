
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import MenuDemo from './Menu';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import axios from 'axios';

export class Newcoiffeur extends Component {



    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatarUrl: '',
            isAdmin: '',
            isActive: '',
            isBanned: '',
            invitationCode: '',
            job: '',
            createdAt: '',
            updatedAt: '',
            value: ''
        };
      //  this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChan44ge = e => this.setState({
        [e.target.name]: e.target.value
    })
    submitForm = event => {

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            avatarUrl: this.state.avatarUrl,
            isAdmin: this.state.isAdmin,
            isActive: this.state.isActive,
            isBanned: this.state.isBanned,
            invitationCode: this.state.invitationCode,
            job: this.state.job,
            createdAt: this.state.createdAt,
            updatedAt: this.state.updatedAt
        };

        axios.post('http://localhost:3000/users', { user }, {
            headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' }
        }
        )
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
            event.preventDefault();

    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        const jobSelectItems = [
            { label: 'Coiffeur', value: 'Coiffeur' },
            { label: 'Estheticienne', value: 'Estheticienne' },
            { label: 'Photographe', value: 'Photographe' }
        ];
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
                            <h1>Ajouter un nouveau Coiffeur</h1>

                            <p>Sur select Job ajouter sur onchange un handle change? Reparation des bouton bouleen</p>
                        </div>
                    </div>

                    <div>
                        <div className="content-section implementation inputgrid-demo">
                            <div className="p-grid p-fluid">

                                <Form onSubmit={this.submitForm}>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Nom" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Prenom" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Mot de passe" name="password"  value={this.state.password} type="text" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Avatar" name="avatarUrl" value={this.state.avatarUrl} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-4 p-md-4">
                                        <div>Admin<InputSwitch onLabel="Yes" name="isAdmin" value={this.state.isAdmin} onChange={this.handleChange} /></div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Parrain" name="godFatherId" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="createdAt" name="createdAt" value={this.state.createdAt} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="updatedAt" name="updatedAt" value={this.state.updatedAt} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-4 p-md-4">
                                        <div>isActive<InputSwitch onLabel="Yes" name="isActive" onChange={this.handleChange} /></div>
                                    </div>

                                    <div className="p-col-4 p-md-4">
                                        <div>isActive<InputSwitch onLabel="Yes" name="isBanned" onChange={this.handleChange} /></div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Code Filleul" value={this.state.invitationCode} name="invitationCode" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
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