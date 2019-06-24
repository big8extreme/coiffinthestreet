import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { Text, Header, Item, Input, Button, Form, Badge } from "native-base";
import { MapView } from "expo";
import MapToolTip from "./MapToolTip";

export default class MapMarker extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 43.296422,
          longitude: 5.36978,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.4001
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 43.2961743,
            longitude: 5.3699525
          }}
          title="Location"
          description="I'm here !"
          image={require("../../../assets/pin.png")}
        >
          <Badge style={{ marginTop: -11, marginLeft: 30 }}>
            <Text>2</Text>
          </Badge>
          <MapView.Callout tooltip style={{ width: 200 }}>
            <MapToolTip navigation={{navigate}}/>
          </MapView.Callout>
        </MapView.Marker>
      </MapView>
    );
  }
}
