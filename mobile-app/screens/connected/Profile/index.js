import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/auth'
import MaraudeCreationForm from '../../public/MaraudeCreationForm'

export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
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
        <Button
          title="Click me to logout"
          onPress={() => this.props.logout()}
        />
        <MaraudeCreationForm />
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
