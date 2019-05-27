import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Text, Toast, Root } from 'native-base';
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../../../store/actions/auth'

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  loginUser = async () => {
    const response = await this.props.login(this.state.email, this.state.password);
    if (response.status === 'error') {
      Toast.show({
        text: 'Erreur de connexion',
        buttonText: 'Ok'
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (auth.user.isConnected) {
      setTimeout(() => {
        navigate('App', { name: 'John DOE' })
      }, 10)
    }
    return (
      <Root>
        <Form style={styles.formContainer}>
          <Item>
            <Input
              onChangeText={(value) => this.setState({ email: value })}
              placeholder="Username" />
          </Item>
          <Item>
            <Input
              secureTextEntry
              onChangeText={(value) => this.setState({ password: value })}
              placeholder="Password" />
          </Item>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.loginUser()}
            >
              <Text>Se connecter</Text>
            </Button>
          </View>
        </Form>
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: { flex: 0, flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  formContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingRight: 20 }
})

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
