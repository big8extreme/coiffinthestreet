import React, { Component } from "react";
import { ScrollView } from "react-native";
import CardMaraude from './CardMaraude';
import { View, Text } from "native-base";
import { connect } from 'react-redux'

class CardsMaraudes extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
      {
        this.props.maraudes.length>1 ? 
        this.props.maraudes.map((maraude, index) => {
            return (
            <View key={index}>
              <CardMaraude maraude={maraude} navigation={this.props.navigation} />
            </View>
          );
        })
        :
        <Text style={{ fontStyle: 'italic', padding: 10 }}>Désolé il n'y a pas de maraude dans cette ville</Text>
      }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  maraudes: state.maraude.maraudes
});

const mapDispatchToProps = {}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CardsMaraudes);
