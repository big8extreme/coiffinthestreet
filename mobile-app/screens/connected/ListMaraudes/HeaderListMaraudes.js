import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ScrollView } from "react-native";
import { Text, Header, Item, Input, Button, Form } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

export default class HeaderListMaraudes extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {
      status: true
    };
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };
  render() {
    return (
      <View style={{ paddingTop: 10, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FBFBFB', height: 60 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          searchBar
          rounded
          style={{
            flex: 8
          }}
        >
          {!this.state.status ? (
            <Item
              style={{
                backgroundColor: "#FBFBFB",
              }}
            >
              <Input
                placeholder="Entrez votre ville"
                style={{
                  paddingLeft: 5,
                  borderBottomColor: "#000",
                  borderBottomWidth: 2
                }}
              />
            </Item>
          ) : (
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 15,
                textTransform: "uppercase",
                color: "#929292",
                paddingBottom: 3
              }}
            >
              Liste des maraudes à {"\n"}
              <Text style={{
                fontFamily: "Roboto",
                fontSize: 15,
              }}>Marseille</Text>
            </Text>
          )}
          </View>
          <View style={{flex: 1, width: 50, height: 50}}>
          <Icon name="ios-search" style={{ flex: 1, fontSize: 25, textAlign: 'right', paddingTop: 8 }} onPress={this.ShowHideTextComponentView} />
          </View>
          </View>
      </View>
    );
  }
}