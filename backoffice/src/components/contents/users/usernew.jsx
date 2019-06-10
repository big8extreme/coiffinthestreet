
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import axios from 'axios';
import { Useravatar } from './useravatar';

export class Usernew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatarUrl: '',
            isAdmin: false,
            isActive: false,
            isBanned: false,
            invitationCode: '',
            job: '',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })
    submitForm = event => {
        event.preventDefault();

        const user = { ...this.state }

        axios.post('http://localhost:3000/users', { ...user }, { headers: { Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' } }
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        const jobSelectItems = [
            { label: 'Coiffeur', value: 'Coiffeur' },
            { label: 'Estheticienne', value: 'Estheticienne' },
            { label: 'Photographe', value: 'Photographe' }
        ];
        return (
            <div>
                <div className="content-section implementation inputgrid-demo">
                    <Form onSubmit={this.submitForm}>

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Mot de passe" name="password" type="text" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="RE Mot de passe" name="password2" type="text" onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Nom" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Prenom" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                </div></div>
                        </div>

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Parrain" name="godFatherId" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Code Filleul" value={this.state.invitationCode} name="invitationCode" onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <p>isAdmin</p>
                                <InputSwitch name="isAdmin" value={this.state.isAdmin} checked={this.state.isAdmin} onChange={(e) => this.setState({ isAdmin: e.target.value })} />
                            </div>
                            <div className="p-col-4 p-md-4">
                                <p>isActive</p>
                                <InputSwitch name="isActive" value={this.state.isActive} checked={this.state.isActive} onChange={(e) => this.setState({ isActive: e.target.value })} />
                            </div>
                            <div className="p-col-4 p-md-4">
                                <p>isBanned</p>
                                <InputSwitch name="isBanned" value={this.state.isBanned} checked={this.state.isBanned} onChange={(e) => this.setState({ isBanned: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <div className="p-col-12 p-md-4">
                                <Useravatar />
                            </div>
                        </div>

                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4" >
                                <Button type="submit" value="Envoyer" >Submit</Button>
                            </div>
                        </div>



                    </Form>
                </div>
            </div>

        );
    }
}