
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import MenuDemo from './Menu';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import {Calendar} from 'primereact/calendar';
export class Newcoiffeur extends Component {



    constructor() {
        super();
        this.state = {
            username: null,
            price: null,
            website1: null,
            website2: null
        }
    }




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
                        </div>
                    </div>

                    <div>
                        <div className="content-section implementation">
                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-user"></i>
                                        </span>
                                        <InputText placeholder="email" name="email" />
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Mot de passe" name="Password" />
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Nom" name="firstName" />
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Prenom" name="lastName" />
                                    </div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Avatar" name="avatarUrl" />
                                    </div>
                                </div>

                                <div className="p-col-4 p-md-4">
                                    <p>Admin<InputSwitch onLabel="Yes" name="isAdmin"/></p>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Parrain" name="godFatherId" />
                                    </div>
                                </div>


                                <div className="p-col-12 p-md-4">
                            <h3>Time / 24h</h3>
                            <Calendar value={this.state.date8} onChange={(e) => this.setState({date8: e.value})} showTime={true} showSeconds={true} />
                        </div>




                        <div className="p-col-12 p-md-4">
                            <h3>Time / 24h</h3>
                            <Calendar value={this.state.date8} onChange={(e) => this.setState({date8: e.value})} showTime={true} showSeconds={true} />
                        </div>





                                <div className="p-col-12 p-md-4">
                                    <Dropdown value={this.state.job} options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                </div>






                                <div className="p-col-12 p-md-4">
                                    <Dropdown value={this.state.job} options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                </div>




                            </div>
                        </div>














                    </div>
                </div>
            </div>



        );
    }
}