import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, Dimensions, View, StyleSheet } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import Loader from './Loader';
import { signup } from '../../../store/actions/auth';
import { Toast, Root, Button } from 'native-base';
import ValidateFormButton from '../../../components/ValidateFormButton';
import { withNavigation } from 'react-navigation';




const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'firstname', 'name', 'pseudo', 'password', 'invitationCode', 'confirmPassword']
const onPress = { onPress }


class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      email: '',
      pseudo: '',
      name: '',
      firstname: '',
      password: '',
      confirmPassword: '',
      invitationCode: '',
      avatarUrl: '',
      loading: false
    }
  }

  submitForm = async () => {
    this.setState({ loading: true })
    let errors = [];
    requiredFields.forEach(item => {
      if (this.state[item].length < 1) {
        errors.push({ field: item, error: "Champ obligatoire" });
      }
    });
    this.setState({ errors: errors });
    if (errors.length < 1) {
      const response = await this.props.signup(this.state)
      if (response.status === "success") {
        Toast.show({
          text: 'Success',
          position: 'top',
          type: 'success',
        })
        setTimeout(() => {
          this.props.navigation.navigate('DrawerMenu')
        }, 500)
      }
      else if (response.status === "invalid_code") {
        Toast.show({
          text: "Le code de parrainage saisi est invalide !",
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
   getToast() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        
      });
    }, 2500);
  }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <Root>
        <ScrollView>
          <Text style={style.title}>INSCRIPTION EN TANT QUE COIFFEUR</Text>
          <Form
            ref={(ref) => this.myForm = ref}
            validate={true}
            errors={this.state.errors}
            style={{ marginBottom: 30 }}
          >
            <AvatarUpload onSelected={(file) => this.setState({ avatar: file })} />
            <Text style={style.inputText}>Nom *</Text>
            <Field

              component={InputField}
              name="name"
              value={this.state.name}
              onChangeText={(val) => this.handleTextChange('name', val)}
              customStyle={style.field}
            />

            <Text style={style.inputText}>Prénom *</Text>
            <Field

              component={InputField}
              name="firstname"
              value={this.state.firstname}
              onChangeText={(val) => this.handleTextChange('firstname', val)}
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
            
            <Text style={style.inputText}>E-mail *</Text>
            <Field
              component={InputField}
              name="email"
              value={this.state.email}
              onChangeText={(val) => this.handleTextChange('email', val)}
              customStyle={style.field}
            />

            <Text style={style.inputText}>Mot de passe *</Text>
            <Field
              secureTextEntry
              component={InputField}
              name="password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(val) => this.handleTextChange('password', val)}
              customStyle={style.field}
            />

            <Text style={style.inputText}>Confirmer le mot de passe *</Text>
            <Field
              secureTextEntry
              component={InputField}
              name="confirmPassword"
              secureTextEntry={true}
              value={this.state.confirmPassword}
              onChangeText={(val) => this.handleTextChange('confirmPassword', val)}
              customStyle={style.field}
            />

            <Text style={style.inputText}>Entrez votre code de parrainage *</Text>
            <Field
              component={InputField}
              invitationCode="invitationCode"
              secureTextEntry={true}
              value={this.state.invitationCode}
              onChangeText={(val) => this.handleTextChange('invitationCode', val)}
              customStyle={style.field}
            />
          </Form>

          <ValidateFormButton 
          label="Valider" 
          navigation={this.props.navigation} 
          screen="LoginForm" 
          onPress={(e) => {this.submitForm.bind(this); 
            this.getToast(e)}}/>

        </ScrollView>
      </Root>
    );
  }
}

const style = {
  field: {
    borderColor: '#FDC500',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    width: '95%',
    alignSelf: 'center'
  },
  inputText: {
    fontFamily: 'Tinos_bold',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 25,
    marginLeft: 10
  },
  title: {
    fontFamily: 'Tinos_bold',
    fontSize: 20,
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    width: '95%',
    marginTop: 20
  },
  container: {
    backgroundColor: '#CCCCCC',
    height: 100,
    padding: 15,
    display: 'flex',
    alignItems: 'flex-start',
    width: 100,
    paddingTop: 50
  }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signup
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(MyForm))



