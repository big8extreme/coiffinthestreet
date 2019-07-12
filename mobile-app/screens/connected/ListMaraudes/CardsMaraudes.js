import React, { Component } from "react";
import { ScrollView } from "react-native";
import CardMaraude from './CardMaraude';
import { View, Text } from "native-base";
import { connect } from 'react-redux'

class CardsMaraudes extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
        {this.props.maraudes.map((maraude, index) => {
            return (
            <View key={index}>
              <CardMaraude maraude={maraude} navigation={this.props.navigation} />
            </View>
          );
        })}
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


{/* <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
{console.log('DDDDDDDDDDD')}
  {this.props.maraudes.map((maraude, index) => {
    if((this.props.maraudes).length>0){
      return (
      <View key={index}>
        <CardMaraude maraude={maraude} navigation={this.props.navigation} />
      </View>
    );
    } else {
      return <Text>{this.props.maraudes.title}</Text>
    }
  })}
</ScrollView> */}