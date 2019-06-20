import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import { connect } from 'react-redux';
import { createUser, updateUser } from '../../../stores/actions/user';

const defaultUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  avatarUrl: '',
  isAdmin: false,
  isActive: false,
  isBanned: false,
  job: '',
  value: '',
  avatar: {}
};

class UserNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      userId: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user.id === undefined && !this.props.onCreate){
      this.setState({ user: this.props.selectedUser, onCreate: false });
    }
    else if (prevProps.onCreate !== this.props.onCreate && this.props.onCreate) {
      this.setState({...this.state, onCreate: true, user: {...defaultUser}})
    } 
  }


  handleUserStateChange = async (field, value) => {
    await this.setState({ ...this.state, user: {...this.state.user,[field]: value}});
    //this.checkValidity();
  }

  checkValidity = () => {
    return !(this.state.user.password === this.state.user.passwordConfirmation);
  }

  render() {

    const jobSelectItems = [
      { label: 'Coiffeur', value: 'Coiffeur' },
      { label: 'Estheticienne', value: 'Estheticienne' },
      { label: 'Photographe', value: 'Photographe' }
    ];
    const actionLabel = this.props.onCreate ? 'Créer' : 'Modifier';   

    return (


      <Dialog header="Ajour/Modification" style={{ width: '50vw' }} visible={this.props.isOpen} onHide={() => 
        {
          this.props.closeModal();
          this.setState({...this.state, user: { ...defaultUser }, onCreate: true})
        }
      }>
        <div>
          <div className="content-section implementation inputgrid-demo">
            <Form >
              <div className="p-grid p-fluid">
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                      <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="email" name="email" value={this.state.user.email} onChange={(event) => this.handleUserStateChange('email', event.target.value)} />
                  </div>
                </div>
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <InputText placeholder="Mot de passe" name="password" type="text" onChange={(event) => this.handleUserStateChange('password', event.target.value)} />
                  </div>
                </div>
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <InputText placeholder="RE Mot de passe" name="passwordConfirmation" type="text" onChange={(event) => this.handleUserStateChange('passwordConfirmation', event.target.value)} />
                  </div>
                </div>
              </div>
              <div className="p-grid p-fluid">
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <InputText placeholder="Nom" name="firstName" value={this.state.user.firstName} onChange={(event) => this.handleUserStateChange('firstName', event.target.value)} />
                  </div>
                </div>
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <InputText placeholder="Prenom" name="lastName" value={this.state.user.lastName} onChange={(event) => this.handleUserStateChange('lastName', event.target.value)} />
                  </div>
                </div>
                <div className="p-col-4 p-md-4">
                  <div className="p-inputgroup">
                    <Dropdown value={this.state.user.job} name="job" options={jobSelectItems} onChange={(event) => this.handleUserStateChange('job', event.target.value)} placeholder="Select a Job" />
                  </div></div>
              </div>

              <div className="p-grid p-fluid">
                <div className="p-col-6 p-md-4">
                  <div className="p-inputgroup">
                    <InputText placeholder="Parrain" name="godFatherId" onChange={(event) => this.handleUserStateChange('godFatherId', event.target.value)} />
                  </div>
                </div>
                <div className="p-col-6 p-md-4">
                  <div className="p-inputgroup">

                    <input type="file" onChange={(e) => this.setState({ ...this.state, user: { ...this.state.user, avatar: e.target.files[0] } })} />
                  </div>
                </div>
              </div>
              <div className="p-grid p-fluid">
                <div className="p-col-4 p-md-4">
                  <p>isAdmin</p>
                  <InputSwitch name="isAdmin" value={this.state.user.isAdmin} checked={this.state.user.isAdmin} onChange={(event) => this.handleUserStateChange('isAdmin', event.target.value)} />
                </div>
                <div className="p-col-4 p-md-4">
                  <p>isActive</p>
                  <InputSwitch name="isActive" value={this.state.user.isActive} checked={this.state.user.isActive} onChange={(event) => this.handleUserStateChange('isActive', event.target.value)} />
                </div>
              </div>
              <div className="p-grid p-fluid">
                <div className="p-col-6 p-md-4" >
                  <Button icon="pi pi-check" disabled={this.checkValidity()} label={actionLabel} onClick={async (event) => {
                    event.preventDefault();
                    if (this.props.onCreate) {
                      await this.props.createUser(this.state.user);
                      this.props.closeModal();
                      this.setState({...this.state, user: {...defaultUser}})
                    } else {
                      this.props.updateUser(this.state.user, this.state.user.id);
                      this.props.closeModal();
                      this.setState({...this.state, user: {...defaultUser}})
                    }
                  }} />
                </div>
                <div className="p-col-6 p-md-4" >
                  <Button label="Annuler" icon="pi pi-times" onClick={this.props.closeModal} className="p-button-secondary" />
                </div>
              </div>

            </Form>
          </div>
        </div>
        <div>

        </div> </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  createUser,
  updateUser

};

export default connect(mapStateToProps, mapDispatchToProps)(UserNew);
