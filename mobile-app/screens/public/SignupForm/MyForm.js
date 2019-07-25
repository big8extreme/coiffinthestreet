import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, View, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import { signup } from '../../../store/actions/auth';
import LoginForm from '../LoginForm';
import GlobalFooter from '../../../components/GlobalFooter';
import { Toast, Root } from 'native-base';

import CustomButton from '../../../components/CustomButton';


const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['avatar', 'email', 'firstName', 'name', 'pseudo', 'password', 'invitationCode', 'confirmPassword']

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      email: '',
      pseudo: '',
      name: '',
      firstName: '',
      password: '',
      confirmPassword: '',
      invitationCode: '',
      avatar: '',
      loading: false
    }
  }

  submitForm = async () => {
    this.setState({ loading: true })
    let errors = [];
    requiredFields.forEach(item => {
      if (this.state[item].length < 1) {
        errors.push({ field: item, error: "Champ obligatoire " });
      }
    });
    this.setState({ errors: errors });
    if (errors.length < 1) {
      const response = await this.props.signup(this.state)
      if (response.status === "success") {
        Toast.show({
          text: 'Inscription réussie',
          position: 'top',
          type: 'success',
        })
        setTimeout(() => {
          this.props.navigation.navigate('BottomTab')
        }, 500)
      }
      else if (response.status === "invalid_code") {
        Toast.show({
          text: "Le code de parrainage saisi est invalide",
          position: 'top',
          type: 'danger'
        })
      }
      else {
        Toast.show({
          text: response.error.data.message,
          position: 'top',
          type: 'danger'
        })
      }
    }
    this.setState({ loading: false })
  }

  handleTextChange = (field, value) => {
    this.setState({ [field]: value })
    this.resetError(field)
  }

  resetError = (field) => {
    const { errors } = this.state
    const erronedFields = errors.map((err => err.field))
    if (erronedFields.includes(field)) {
      const index = erronedFields.indexOf(field)
      errors.splice(index, 1)
      this.setState({ errors })
    }
  }

  render() {

    return (
      <Root>
        <View style={{ alignSelf: 'center', backgroundColor: '#2D2D2D', width: '100%' }}>
          <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
          <Text style={{
            color: 'white',
            alignSelf: 'center',
            fontFamily: "Sedgwick",
            marginBottom: 10,
            marginTop: 25,
            fontWeight: 'bold',
            fontSize: 40
          }}>
            Inscription
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" enabled >
          <ScrollView style={{ backgroundColor: '#2D2D2D' }}>

            <AvatarUpload
              resetError={this.resetError}
              erroned={this.state.errors.map(err => err.field).includes('avatar')}
              onSelected={(file) => this.setState({ avatar: file })} />

            <Form
              style={{ alignSelf: 'center', width: '90%' }}
              ref={(ref) => this.myForm = ref}
              validate={true}
              errors={this.state.errors}

            >
              <Text style={style.inputText}>Nom</Text>
              <Field
                component={InputField}
                name="name"
                value={this.state.name}
                onChangeText={(val) => this.handleTextChange('name', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>Prénom</Text>
              <Field
                component={InputField}
                name="firstName"
                value={this.state.firstName}
                onChangeText={(val) => this.handleTextChange('firstName', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>Pseudo</Text>
              <Field
                component={InputField}
                name="pseudo"
                value={this.state.pseudo}
                onChangeText={(val) => this.handleTextChange('pseudo', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>E-mail</Text>
              <Field
                component={InputField}
                name="email"
                value={this.state.email}
                onChangeText={(val) => this.handleTextChange('email', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>Mot de passe</Text>
              <Field
                secureTextEntry
                component={InputField}
                name="password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(val) => this.handleTextChange('password', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>Confirmer le mot de passe</Text>
              <Field
                secureTextEntry
                component={InputField}
                name="confirmPassword"
                secureTextEntry={true}
                value={this.state.confirmPassword}
                onChangeText={(val) => this.handleTextChange('confirmPassword', val)}
                customStyle={style.field}
              />

              <Text style={style.inputText}>Entrez votre code de parrainage</Text>
              <Field
                component={InputField}
                name="invitationCode"
                value={this.state.code}
                secureTextEntry={true}
                onChangeText={(val) => this.handleTextChange('invitationCode', val)}
                customStyle={style.field}
              />
            </Form>
            <View style={{ marginBottom: 200 }}>
              <CustomButton
                label="Créer la Maraude"
                fontSize={25}
                colorfill="#FDC500"
                onPressFunc={this.submitForm} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <GlobalFooter />
      </Root>
    );
  }
}



const style = {
  field: {
    borderColor: '#FDC500',
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: 'white'
  },
  inputText: {
    fontFamily: 'Tinos_bold',
    marginBottom: 5,
    marginTop: 25,
    color: 'white',
    fontSize: 18
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  buttonText: {
    marginTop: 82,
    marginLeft: 120,
    position: 'absolute',
    fontFamily: 'Sedgwick',
    fontSize: 80,
    zIndex: 900,
    color: '#FDC500'
  },
  title: {
    fontFamily: 'Tinos_bold',
    textAlign: 'center',
    fontSize: 20,
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm)