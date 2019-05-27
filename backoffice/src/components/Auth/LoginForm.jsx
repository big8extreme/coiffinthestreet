// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../stores/actions/auth';
import { Container, Row, Col } from 'reactstrap';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link, Redirect } from 'react-router-dom';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  loginUser = () => {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const { user } = this.props.authentification;
    if (user.isConnected && user.isAdmin) {
      return <Redirect to="/admin" />;
    }
    return (
      <Container className="flex-column flex-center flex-center-items full-height-screen">
        <Row>
          <Col xs="12" md="6">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Username" />
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <InputText
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Password" />
            </div>
          </Col>
        </Row>
        <Row className="marged-top">
          <Col xs="12">
            <Button onClick={this.loginUser} label="Se connecter" icon="pi pi-angle-right" />
          </Col>
        </Row>
        <Link to="/admin">Click to go to admin</Link>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  login
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
