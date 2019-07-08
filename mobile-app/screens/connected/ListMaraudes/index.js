import React, { Component } from "react";
import { View } from "native-base";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardsMaraudes from "./CardsMaraudes";


export class ListMaraudes extends Component {
  render() {
    return (
      <View>
        <HeaderListMaraudes />
        <View>
          <CardsMaraudes navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
export default ListMaraudes