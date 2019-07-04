import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/auth'



export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  // submitLogout = async () =>{
  //   const response = await this.props.logout(1);
  //   console.log('response', response);
  // }
  submitLogout() {
    this.callLogout();
  }
  callLogout = async () =>{
    const response = await this.props.logout(1);
    console.log('response', response);
  }
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user.isConnected) {
      setTimeout(() => {
        navigate('Auth')
      }, 10)
    }
    
    return (
      <View>
        <View>
          <Text> Hello and welcome into profile view </Text>
          <Button
            title="Click me to logout"
            onPress={this.submitLogout.bind(this)}
          />
        </View>
      </View>

    )
  }
}

const mapStateToProps = (state) => ({
  // ...state
  auth : state.auth
})

const mapDispatchToProps = {
  logout
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Profile)