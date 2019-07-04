import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/auth'



export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  callLogout = async () =>{
    //todo get user Id and add it as parameter. 
    // const response = await this.props.logout(1);
    const response = await this.props.logout();
    console.log('response', response);
    this.props.navigation('Auth');

    //todo if error, display error
    //else, redirect to defaut route
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
            onPress={this.callLogout.bind(this)}
          />
        </View>
      </View>

    )
  }
}

const mapStateToProps = (state) => ({
   auth : state.auth
})

const mapDispatchToProps = {
  logout
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Profile)