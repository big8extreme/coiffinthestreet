import React, { Component } from 'react'
import { Toast, Root } from 'native-base';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
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
        <View style={styles.backgroundApp}>
          <View style={styles.flexCenterImg}>
            <Image
              // @ts-ignore
              source={require('./Logo_light.png')}
            />
          </View>
          <View style={styles.flexCenter}>
            <Text style={styles.whiteTextLabel}>Email :</Text>
            <View style={styles.yellowBorder}>
              <TextInput onChangeText={(value) => this.setState({ email: value })} placeholder='Entrez votre email'></TextInput>
            </View>
            <Text style={styles.whiteTextLabel}>Mot de passe :</Text>
            <View style={styles.yellowBorder}>
              <TextInput onChangeText={(value) => this.setState({ password: value })} placeholder='******' secureTextEntry={true}></TextInput>
            </View>
          </View>
          <View style={styles.flexCenterImg}>
            <TouchableOpacity onPress={() => this.loginUser()}>
              <Image style={styles.button}
                // @ts-ignore
                source={require('./connect.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  backgroundApp: {
    backgroundColor: '#4E4E4E', flex: 1,
  },

  flexCenterImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },

  flexCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  whiteTextLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,

  },

  yellowBorder: {
    borderBottomColor: '#FDC500',
    borderBottomWidth: 3,
    marginBottom: 30,
  },
  button: {
    marginTop: 60,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)