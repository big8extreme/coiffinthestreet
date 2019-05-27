import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../../store/actions/auth'

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  render() {
    const { navigate } = this.props.navigation;
    if (this.props.auth.isConnected) {
      setTimeout(() => {
        navigate('App', { name: 'John DOE' })
      }, 10)
    }
    return (
      <View>
        <Text> Hello in login form </Text>
        {
          this.props.auth.isConnected
            ?
            <View>
              <Text>You're connected !</Text>
              <Button
                title="Go to profile screen"
                onPress={() => {
                  navigate('App', { name: 'John DOE' })
                }}
              />
            </View>
            :
            <Button
              title="Click me to login"
              onPress={() => this.props.login()}
            />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
