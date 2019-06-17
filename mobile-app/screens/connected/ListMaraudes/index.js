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
  View
} from "native-base";
import { connect } from "react-redux";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardMaraude from "./CardMaraude";

export class ListMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    return (
      <Container>
        <View style={{ height: 65 }}>
        <HeaderListMaraudes />
        </View>
        <CardMaraude />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMaraudes);
