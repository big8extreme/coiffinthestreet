import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/auth'



export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user || !auth.user.isConnected) {
      setTimeout(() => {
        navigate('Auth')
      }, 10)
    }

    callLogout = async () =>{
      this.props.logout();
      this.props.navigation('Auth');
    }
    
    return (
      <View>
        <View>
          <Text> Hello and welcome into profile view </Text>
          <Button
            title="Click me to logout"
            onPress={this.callLogout()}
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