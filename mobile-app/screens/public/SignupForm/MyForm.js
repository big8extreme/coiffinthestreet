import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView, Container } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import { signup } from '../../../store/actions/auth';
import { Toast, Root, Button } from 'native-base';
import ValidateFormButton from '../../../components/ValidateFormButton';
import { withNavigation } from 'react-navigation';



const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'firstName', 'name', 'pseudo', 'password', 'invitationCode', 'confirmPassword']
const onPress = { onPress }
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
    }
  }


  submitForm = async () => {
    // this.setState({isDisabled : true })
    let errors = [];
    requiredFields.forEach(item => {
      if (this.state[item].length < 1) {
        errors.push({ field: item, error: "Champ obligatoire" });
      }
    });
    this.setState({ errors: errors, loading: false });

    if (errors.length < 1) {
      // this.setState({isDisabled : true })
      const response = await this.props.signup(this.state)
      if (response.status === "success") {
        console.log('PPPOOOUUUEEETTT')
        Toast.show({
          text: 'Success',
          position: 'top',
          type: 'success',
          duration: 4000,
          onClose: () => {
            this.props.navigation.navigate('Map');
          }
        })
      } else {
        // this.setState({isDisabled : false })
        console.log('PPPRRROOOUUUTTT')
        Toast.show({
          text: "Erreur lors de l'inscription",
          position: 'top',
          type: 'danger',
          duration: 2000
        })
      }
    }
  }

  submitSuccess() {
    console.log("Submit Success!");
  }

  submitFailed() {
    console.log("Submit Failed!");
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
    const { navigate } = this.props.navigation;
    return (
      <Root>
        <ScrollView>
          <AvatarUpload onSelected={(file) => this.setState({ avatar: file })} />

          <Form
            ref={(ref) => this.myForm = ref}
            validate={true}
            submit={this.submitSuccess.bind(this)}
            failed={this.submitFailed.bind(this)}
            errors={this.state.errors}

          >
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
              onChangeText={(val) => this.handleTextChange('firstName', val)}
              customStyle={style.field}
            />
            <Text style={style.inputText}>Pseudo *</Text>
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
              name="code"
              secureTextEntry={true}
              value={this.state.code}
              onChangeText={(val) => this.handleTextChange('invitationCode', val)}
              customStyle={style.field}
            />
          </Form>

          <ValidateFormButton
            label="valider"
            onPress={() => this.submitForm()}
          />
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
    width: '90%',
    alignSelf: 'center'
  },
  inputText: {
    fontFamily: 'Tinos_bold',
    marginBottom: 5,
    marginTop: 25,
  },
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signup
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(MyForm))



