import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changePassword, deleteAccount } from '../../../../store/actions/auth'
import { StyleSheet, View, ScrollView, Image, Alert } from 'react-native';
import { Form, Textarea } from 'native-base';
import CustomButton from '../../../../components/CustomButton';
import { Toast, Root } from 'native-base';

class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      oldPassword: '',
      password: '',
      passwordConfirmation: ''
    };
  }
  changePassword = async () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      return Toast.show({
        text: "Les mots de passe ne correspondent pas",
        type: 'danger',
        buttonText: 'Ok'
      })
    }
    else if (this.state.password.length < 6) {
      return Toast.show({
        text: "Le mot de passe n'est pas assez long (6 caractères min)",
        type: 'danger',
        buttonText: 'Ok'
      })
    }
    else {
      const response = await this.props.changePassword(this.state.oldPassword, this.state.password);
      if (response.status === 'error') {
        Toast.show({
          text: "Erreur lors du changement de mot de passe",
          type: 'danger',
          buttonText: 'Ok'
        })
      } else if (response.status === 'success') {
        Toast.show({
          text: "Votre mot de passe a bien été changé",
          position: 'top',
          type: 'success',
          buttonText: 'Ok'
        })
        setTimeout(() => {
          this.props.navigation.navigate('BottomTab')
        }, 500)
      }
    }
  }
  deleteAccount = () => {
    Alert.alert(
      'Suppression de compte',
      'Êtes vous sûr de vouloir supprimer votre compte ?',
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Oui', onPress: () => {
            this.props.deleteAccount()
          }
        },
      ],
      { cancelable: false },
    );
  }
  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }
  render() {
    console.log(this.state.subject)
    return (
      <Root>
        <ScrollView style={{ backgroundColor: '#2D2D2D', minHeight: '100%' }}>
          <View style={styles.logo}>
            <Image source={require('../../../../assets/Logo_light.png')} />
          </View>
          <View>
            <Form>
              <Textarea style={styles.miniForm}
                placeholder="Ancien mot de passe"
                onChangeText={(value) => this.handleChange('oldPassword', value)}
              />
              <Textarea style={styles.miniForm}
                placeholder="Nouveau mot de passe"
                onChangeText={(value) => this.handleChange('password', value)}
              />
              <Textarea style={styles.miniForm}
                placeholder="Confirmer nouveau mot de passe"
                onChangeText={(value) => this.handleChange('passwordConfirmation', value)}
              />
            </Form>
          </View>
          <CustomButton
            onPressFunc={() => this.changePassword()}
            label="Modifier"
            style={{ color: 'yellow' }}

          />
          <View>
            <CustomButton
              onPressFunc={() => this.deleteAccount()}
              label="Supprimer mon compte"
              turn="177"
              fontSize={20}
              colorfill="red"

            />
          </View>
        </ScrollView>
      </Root>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  form: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(253,197,0)',
    borderRadius: 5,
    marginBottom: 60,
  },
  miniForm: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(253,197,0)',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: 'white',
    fontFamily: 'Tinos'
  },
  contactTextTitle: {
    fontSize: 20,
    color: 'rgb(253,197,0)',
    margin: 22,
    fontFamily: 'Tinos_bold',
    marginLeft: 60,
  },
  contactInfo: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'rgb(253,197,0)',
    margin: 22,
    marginLeft: 62,
  }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  changePassword,
  deleteAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
