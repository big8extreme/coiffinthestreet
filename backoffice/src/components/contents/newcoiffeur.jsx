
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import MenuDemo from './Menu';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';


export class Newcoiffeur extends Component {
    constructor() {
        super();
        this.state = {
            firstName: null,
            updatedAt: null,
            createdAt: null
          
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }


      submitForm(e) {
        e.preventDefault();
        let databody = {
            "firstName":this.state.firstName,
            "updatedAt": this.state.updatedAt,
            "createdAt": this.state.createdAt
        }
    
        fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(databody),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => console.log(data));
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
                        <div className="content-section implementation inputgrid-demo">
                            <div className="p-grid p-fluid">


                         
            

                            <Form onSubmit={this.submitForm}>
                  

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
                                        <InputText placeholder="createdAt" name="createdAt" />
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="updatedAt" name="updatedAt" />
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
                                    <div>Admin<InputSwitch onLabel="Yes" name="isAdmin"/></div>
                                </div>
                                <div className="p-col-4 p-md-4">
                                    <div>isActive<InputSwitch onLabel="Yes" name="isActive"/></div>
                                </div>

                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Parrain" name="godFatherId" />
                                    </div>
                                </div>

                                
                                <div className="p-col-12 p-md-4">
                                    <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Select a Job" />
                                </div>


                                <div className="p-col-12 p-md-4">
                                    <div className="p-inputgroup">
                                        <InputText placeholder="Code Filleul" name="invitationCode" />
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