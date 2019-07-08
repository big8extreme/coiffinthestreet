import React, { Component } from "react";
import { View } from "native-base";
import { Button } from "react-native";
import { connect } from "react-redux";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardsMaraudes from "./CardsMaraudes";


export class ListMaraudes extends Component {
  render() {
    console.log("LALALALA", this.props)
    return (
      <React.Fragment>
        <HeaderListMaraudes />
        <Button onPress={() => this.forceUpdate()} title="test" />
        <View>
          <CardsMaraudes maraudes={this.props.maraude.maraudes} navigation={this.props.navigation} />
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {

}

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMaraudes);