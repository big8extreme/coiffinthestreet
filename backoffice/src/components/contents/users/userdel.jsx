import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import axios from 'axios';

export class Userdel extends Component {

    constructor() {
        super();
        this.state = { visible: true,
            userId:'' };
        this.onHide = this.onHide.bind(this);
    }

    onHide() {
        this.setState({ visible: false });
    }
   
    delUsers(role_id) {
    axios.delete(`http://localhost:3000/users/${role_id}`, {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}})
    .then(res => {
      console.log(res);
      console.log(res.data);
      if (res.status === 200) {
        window.location = "/admin/users"
    }
    })
    .catch(error => {
        console.log(error)
    });
}

    render() {
        const userId = this.props.match.params.id;
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check"  onClick={() => this.delUsers(userId)} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
        return (
            <Dialog header="Suppression" visible={this.state.visible} style={{ width: '50vw' }} footer={footer} onHide={this.onHide} >
                Voulez vous vraiment supprimer l'utilisateur  {this.props.userId} ? </Dialog>
        )

    }
}
