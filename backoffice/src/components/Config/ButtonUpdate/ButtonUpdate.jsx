import React, { Component } from 'react';
import { SplitButton } from 'primereact/splitbutton';

export class ButtonUpdate extends Component {

    render() {
        return (
            <SplitButton label="Update" icon="pi pi-refresh" onClick={this.save} model={this.state.items}></SplitButton>
        )
    }
}
