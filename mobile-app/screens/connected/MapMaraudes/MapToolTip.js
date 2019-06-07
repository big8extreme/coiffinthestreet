import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
  View,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Content,
  Container,
  Button
} from "native-base";

export default class MapToolTip extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{ backgroundColor: "#646464", paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
      >
      
        <TouchableOpacity
      onPress={() => {
          navigate("List");
        }}>
        <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }} onPress={() => {
          navigate("List");
        }}>Titre de la maraude</Text>
        <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>Organisateur de la maraude</Text>
        <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>Date et Heure</Text>
        </TouchableOpacity>

        </View>
    );
  }
}

