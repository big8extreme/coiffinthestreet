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
import { logout } from "../../../store/actions/auth";

export class MapMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user.isConnected) {
      setTimeout(() => {
        navigate("Auth");
      }, 10);
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMaraudes);
