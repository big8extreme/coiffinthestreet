import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Icon,
  Badge
} from "native-base";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";

export class MapMaraudes extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user.isConnected) {
      setTimeout(() => {
        navigate('Auth')
      }, 10)
    }
    return (
      <Container>
        <Header noShadow>
          <Left>
          </Left>
          <Body>
            <Title>Map des Maraudes</Title>
          </Body>
          <Right />
        </Header>
        <MapMarker navigation={{navigate}} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMaraudes);
