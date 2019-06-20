import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import store from '../.././stores';
import { fetchConfigs } from '../.././stores/actions/config'
import { InputTextarea } from 'primereact/inputtextarea';
import './Configs.scss'
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
        this.growl.show({ severity: 'info', summary: 'Felicitation', detail: 'Données Mise à jour' });
    }

    componentDidMount = async () => {
        await this.props.fetchConfigs();
        this.setState({ ...this.props.config })

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container-configs">
                    <div className="row top-page" >
                        <div className="col-6" >
                            <p className="space-text">Condition général d'utilisation</p>
                            <InputTextarea className="space-area" name="cgu" rows={10} cols={60} value={this.state.cgu} onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <p className="space-text">Mention legal</p>
                            <InputTextarea className="space-area" name="legalMention" rows={10} cols={60} value={this.state.legalMention} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" >
                            <p className="space-text">Texte de la Charte</p>
                            <InputTextarea className="space-area" name="charte" rows={10} cols={60} value={this.state.charte} onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <p className="space-text">Email Admin</p>
                            <InputTextarea className="space-area" name="email" rows={10} cols={60} value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" >
                            <p className="space-text">Guideline</p>
                            <InputTextarea className="space-area" name="videoGuidelines" rows={1} cols={60} value={this.state.videoGuidelines} onChange={this.handleChange} />
                        </div>
                        <div className="col-6" >
                            <p className="space-text">Lien video Presentation</p>
                            <InputTextarea className="space-area" name="videoPath" rows={1} cols={60} value={this.state.videoPath} onChange={this.handleChange} />
                        </div>
                    </div>
                    <Growl ref={(el) => this.growl = el}></Growl>
                    <Button className="space-button"
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
            </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    config: state.config.currentConfig
})

const mapDispatchToProps = {
    fetchConfigs,
    updateConfig


}

export default connect(mapStateToProps, mapDispatchToProps)(Configs);

