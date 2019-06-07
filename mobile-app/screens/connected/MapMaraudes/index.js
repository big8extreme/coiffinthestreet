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

export class MapMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;

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
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMaraudes);
