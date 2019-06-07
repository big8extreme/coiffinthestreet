import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';;

export class Hairdresseravatar extends Component {
        
    constructor() {
        super();
        
        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }
    
    onBasicUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
    
    onBasicUploadAuto(event) {   
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    render() {
        return (
            <div>
         

                <div className="content-section implementation">
                    <p>avatarUrl</p>
                    <FileUpload name="avatarUrl" url="./upload.php" onUpload={this.onUpload} 
                                multiple={true} accept="image/*" maxFileSize={1000000} />
                          <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>
            </div>
        )
    }
}
