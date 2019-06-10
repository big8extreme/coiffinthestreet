import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

export class Userdel extends Component {
        
    constructor() {
        super();
        this.state = {visible: true}; 
        this.onHide = this.onHide.bind(this);
    }

    onHide() {
        this.setState({visible: false});
    }

    

    render() {
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
 
                    <Dialog header="Suppression" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} >
                       Voulez vous vraiment supprimer l'utilisateur   </Dialog>

        )
    }
}
