import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';


class  MapToolTip extends React.Component {
  render () {
    const { navigate } = this.props.navigation;
    return  (
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
          <Text style={{ fontFamily: "Sedgwick", fontWeight:'bold', fontSize: 25, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.title}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.description}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Icon name="ios-mail" size={30} style={{color: '#FFF'}}  />
          </TouchableOpacity> 
      </View>
    );
  }
}

export default withNavigation(MapToolTip);
