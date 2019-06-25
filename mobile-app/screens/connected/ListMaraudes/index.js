import React, { Component } from "react";
import { View } from "native-base";
import { connect } from "react-redux";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardsMaraudes from "./CardsMaraudes";

export class ListMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    return (
      <React.Fragment>
        <HeaderListMaraudes />
        <View>
        <CardsMaraudes />
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {

};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMaraudes);
