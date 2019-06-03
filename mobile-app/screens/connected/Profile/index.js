import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/auth'
import SignupForm from '../../public/SignupForm';

export class Profile extends Component {
  static navigationOptions = {
    title: 'Inscription',
  };
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
       <SignupForm/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  logout
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
