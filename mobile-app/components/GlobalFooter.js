import React, { Component } from 'react';
import { Footer } from 'native-base';
import { DrawerActions } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation';

class GlobalFooter extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const navigation  = this.props.navigation;
    return (
      <Footer style={{ position:'absolute', bottom: 0, left: 0, right: 0, paddingTop: 10, height: 60, backgroundColor: '#2D2D2D', justifyContent: 'space-around', borderTopWidth: 0}}>
        <Icon style={{paddingTop: 4}} name="ios-globe" size={30} color="#8E8E93" onPress={() => navigate('Map')}/>
        <Icon style={{paddingTop: 4}} name="ios-list-box" size={30} color="#8E8E93" onPress={() => navigate('List')}/>
        <Icon style={{paddingTop: 4}} name="ios-images" size={30} color="#8E8E93" onPress={() => navigate('Feed')}/>
        <Icon style={{paddingTop: 4}} name="ios-menu" size={30} color="#8E8E93" onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} />
      </Footer>
    )
  }
}

export default withNavigation(GlobalFooter);