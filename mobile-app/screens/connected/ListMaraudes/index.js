import React, { Component } from "react";
import { View } from "native-base";
import HeaderListMaraudes from "./HeaderListMaraudes";
import CardsMaraudes from "./CardsMaraudes";


export class ListMaraudes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: null
    }
  }

  componentDidMount() {
    const city = this.props.navigation.getParam('city')
    if(city){
      this.setState({city})
    }
  }
  
  render() {
    return (
      <View>
        <HeaderListMaraudes city={this.state.city} />
        <View>
          <CardsMaraudes navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
export default ListMaraudes