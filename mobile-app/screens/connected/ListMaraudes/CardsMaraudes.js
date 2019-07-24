import React, { Component } from "react";
import { connect } from 'react-redux';
import { ScrollView } from "react-native";
import CardMaraude from './CardMaraude';
import { View, Text } from "native-base";

class CardsMaraudes extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
        {
          this.props.maraudes.length >= 1 ?
            this.props.maraudes.map((maraude, index) => {
              return (
                <View key={index}>
                  <CardMaraude currentUserId={this.props.user.id} maraude={maraude} navigation={this.props.navigation} />
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
  maraudes: state.maraude.maraudes,
  user: state.auth.user
});

const mapDispatchToProps = {}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CardsMaraudes);
