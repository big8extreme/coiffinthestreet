import React, { Component } from "react";
import { ScrollView } from "react-native";
import { fetchMaraudes, showMaraude } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import CardMaraude from './CardMaraude';


class CardsMaraudes extends Component {
  constructor(props) {
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
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        {this.props.maraude.maraudes.map((maraude, index) => {
          return (
            <CardMaraude key={index} maraude={maraude} />
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
