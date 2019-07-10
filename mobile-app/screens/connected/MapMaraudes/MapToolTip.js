import React from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'native-base';

class MapToolTip extends React.Component {
  render () {
    const { navigate } = this.props.navigation;
    return  (
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
        <View style={{width: '90%'}}>
          <Text style={{ fontFamily: "Sedgwick", fontWeight:'bold', fontSize: 25, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.title}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.description}</Text>
        </View>
        <Button bordered light style={{ alignSelf:'center', padding: 10}} onPress={() => navigate('List')}>
          <Text style={{color: 'white'}}>Je souhaite participer</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(MapToolTip);
