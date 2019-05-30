import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../stores/actions/auth';
import Axios from 'axios';
import MenuDemo from './contents/Menu';
import {
  Card, CardHeader, CardBody,
  CardTitle, CardText
} from 'reactstrap';


export class Admin extends Component {
  render() {
    return (

      <React.Fragment>

        <div className="layout-wrapper">
          <div className="layout-topbar">
          </div>
          <div className="layout-sidebar">
            <MenuDemo />
          </div>
          <div className="layout-content">

            <div className="content-section introduction">
              <div className="feature-intro">
                <div>
                  {/* // used to check if token is available */}

                  <h1>IM IN ADMIN PANNEL</h1>

                  <button
                    onClick={() => {
                      Axios.get('/users')
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                    }}
                  >FETCH USERS</button>
                  <button
                    onClick={() => this.props.logout()}
                  >SIGN OUT</button>
                </div>
                <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
              </div>
            </div>

            <Card>
              <CardHeader className="bg-info" tag="h3">En production</CardHeader>
              <CardBody>
                <CardTitle > Bloc notes</CardTitle>
                <CardText>Comment garder le menu et la topbar apres le PrivateRoute??</CardText>
            
                <CardText>  ,onClick={() => this.props.logout()} } sur Sign Out</CardText>
                <CardText>Tableau a verifier, Maraude, Coiffeur, Participant </CardText>
                <CardText>Api a completer et a verifier </CardText>
                <CardText> </CardText>
                <CardText> </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
