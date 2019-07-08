import React, { Component } from "react";
import { ScrollView, Button } from "react-native";
import CardMaraude from './CardMaraude';
import { View } from "native-base";

class CardsMaraudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maraudes: []
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
        {this.props.maraudes.map((maraude, index) => {
          return (
            <View key={index} style={{ backgroundColor: '#FBFBFB' }}>
              <CardMaraude maraude={maraude} navigation={this.props.navigation} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

// @ts-ignore
export default CardsMaraudes
