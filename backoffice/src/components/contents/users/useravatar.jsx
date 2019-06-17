import React, { Component } from 'react';
import { Growl } from 'primereact/growl';
import { FileUpload } from 'primereact/fileupload';

export class Useravatar extends Component {

    constructor() {
        super();
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(event) {
        this.growl.show({ severity: 'info', summary: 'Success', detail: 'avatarUrl' });
    }
    
    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <p>avatarUrl</p>
                    <FileUpload name="avatarUrl" url="http://localhost:5000/uploads/avatars" onUpload={this.onUpload}
                        multiple={true} accept="image/*" maxFileSize={1000000} />
                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>
            </div>
        )
    }
}
