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
  View,
  Item,
  Input
} from "native-base";
import { StyleSheet, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardsMaraudes from "./CardsMaraudes";

export class ListMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    return (
      <React.Fragment>
        <HeaderListMaraudes />
        <View>
        <CardsMaraudes />
        </View>
      </React.Fragment>
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
)(ListMaraudes);
