
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import MenuDemo from './Menu';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

export class Newparticipant extends Component {
    constructor() {
        super();
        this.state = {
            maraudeId: '',
            isValidate: '',
            email: '',
            job: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    submitForm = event => {
        event.preventDefault();
        const participant = {
            maraudeId: this.state.maraudeId,
            isValidate: this.state.isValidate,
            email: this.state.email,
            job: this.state.job

        };

        axios.post('http://localhost:3000/participants', { participant })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        const maraudeencours = [
            { label: 'Vieuxport', value: 'idmaraude' }];

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

                            <p> Ajouter un Particpant  </p>
                        </div>
                    </div>

                    <div>
                        <div className="content-section implementation">
                            <div className="p-grid p-fluid">
                               
                                    <div className="p-col-12 p-md-4">

                                        <p>Selectionner la maraude</p>
                                        <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                    </div>

                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="maraudeId" name="maraudeId" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="p-col-4 p-md-4">
                                        <div>isPublished<InputSwitch onLabel="Yes" name="isValidate" onChange={this.handleChange} /></div>
                                    </div>


                                    <div className="p-col-12 p-md-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="email" name="email" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div>
                               
                                    <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                    </div>

                                <div>
                                    <Button type="submit" value="Envoyer" >Submit</Button>
                                </div>
                            

                        </div>
                    </div>
                </div>
            </div>
            </div >



        );
    }
}