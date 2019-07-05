import React from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class  MapToolTip extends React.Component {
  render () {
    const { navigate } = this.props.navigation;
    console.log(JSON.stringify('sfdgsdfdfhg', this.props))
    return  (
      <View style={{ backgroundColor: "#646464", padding:10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
          <Text style={{ fontWeight:'bold', fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.title}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.description}</Text>
      </View>
    );
  }
}

export default withNavigation(MapToolTip);
