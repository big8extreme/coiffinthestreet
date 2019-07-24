import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConfigs } from '../.././stores/actions/config';
import { InputTextarea } from 'primereact/inputtextarea';
import './Configs.scss';
import { Button } from 'primereact/button';
import { updateConfig } from '../../stores/actions/config';
import { Growl } from 'primereact/growl';

export class Configs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cgu: '',
            charte: '',
            legalMention: '',
            videoPath: '',
            email: '',
            videoGuidelines: '',
        };
        this.save = this.save.bind(this);
    }
    save() {
        this.growl.show({ severity: 'success', summary: 'Félicitations', detail: 'Données Mises à jour' });
    }

    componentDidMount = async () => {
        await this.props.fetchConfigs();
        this.setState({ ...this.props.config });

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        console.log(this.state);
        return (
            <div className="container-configs">
                <div className="row top-page" >
                    <div className="col-6" >
                        <p className="space-text">Conditions Générales d'Utilisation</p>
                        <InputTextarea className="space-area" name="cgu" rows={10} cols={60} value={this.state.cgu} onChange={this.handleChange} />
                    </div>
                    <div className="col-6">
                        <p className="space-text">Mentions legales</p>
                        <InputTextarea className="space-area" name="legalMention" rows={10} cols={60} value={this.state.legalMention} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6" >
                        <p className="space-text">Charte d'une maraude</p>
                        <InputTextarea className="space-area" name="charte" rows={10} cols={60} value={this.state.charte} onChange={this.handleChange} />
                    </div>
                    <div className="col-6">
                        <p className="space-text">Email</p>
                        <InputTextarea className="space-area" name="email" rows={10} cols={60} value={this.state.email} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6" >
                        <p className="space-text">Guideline</p>
                        <InputTextarea className="space-area" name="videoGuidelines" rows={1} cols={60} value={this.state.videoGuidelines} onChange={this.handleChange} />
                    </div>
                    <div className="col-6" >
                        <p className="space-text">Lien vidéo présentation</p>
                        <InputTextarea className="space-area" name="videoPath" rows={1} cols={60} value={this.state.videoPath} onChange={this.handleChange} />
                    </div>
                </div>
                <Growl ref={(el) => this.growl = el}></Growl>
                <Button className="space-button p-button-warning"
                    label="Mettre à jour"
                    icon="pi pi-upload"
                    iconPos="right"
                    onClick={(event) => {
                        event.preventDefault();
                        this.props.updateConfig(this.state);
                        this.save();
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    config: state.config.currentConfig
});

const mapDispatchToProps = {
    fetchConfigs,
    updateConfig


};

export default connect(mapStateToProps, mapDispatchToProps)(Configs);

