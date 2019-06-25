import React, { Component } from "react";
import { ScrollView } from "react-native";
import { fetchMaraudes, showMaraude } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import CardMaraude from './CardMaraude';
import { View } from "native-base";


class CardsMaraudes extends Component {
  constructor(props) {
    console.log('constructor CardsMaraudes')
    super(props);
    this.state = {
      maraudes: []
    };
  }

  componentDidMount() {
    this.props.fetchMaraudes();
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
        {this.props.maraude.maraudes.map((maraude, index) => {
          return (
            <View key={index}  style={{ backgroundColor: '#FBFBFB' }}>
            <CardMaraude maraude={maraude} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes,
  showMaraude
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsMaraudes);
