import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import { Input, Container, } from 'native-base';
import { Form, Field } from 'react-native-validate-form';
import { CheckBox } from 'react-native-elements';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import DatePicker from './DatePicker';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';
import { connect } from 'react-redux'
import { createUser } from '../../../store/actions/user';

const defaultUser = {
    errors: [],
    lastName: '',
    firstName: '',
    pseudo: '',
    email: '',
    password: null,
    confirmPassword: null,
       code: '',
    one: false,
    two: false,
    itemChecked: false
}

const required = value => (value ? undefined : 'This is a required field.');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;

export class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultUser
        }
    }

    submitForm() {
        let submitResults = this.myForm.validate();
        let errors = [];
        submitResults.forEach(item => {
            errors.push({ field: item.fieldName, error: item.error });
        });

        this.setState({ errors: [...errors] });
        this.props.createUser(this.state)
        this.setState({ ...defaultUser })
    }



    onePressed() {
        this.setState({ one: true, two: false })
    }

    twoPressed() {
        this.setState({ one: false, two: true })
    }


    submitSuccess() {
        console.log("Submit Success!");
    }

    submitFailed() {
        console.log("Submit Failed!");
    }

    render() {

        return (

            <ScrollView style={{ margin: 30 }}>

                <AvatarUpload />

                <Form
                    ref={(ref) => this.myForm = ref}
                    validate={true}
                    submit={this.submitSuccess.bind(this)}
                    failed={this.submitFailed.bind(this)}
                    errors={this.state.errors}

                >
                    <Text style={style.inputText}>Nom *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="lastName"
                        value={this.state.lastName}
                        onChangeText={(val) => this.setState({ lastName: val })}
                        customStyle={style.field}
                    />

                    <Text style={style.inputText}>Prénom *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="firstName"
                        value={this.state.firstName}
                        onChangeText={(val) => this.setState({ firstName: val })}
                        customStyle={style.field}
                    />

                    <Text style={style.inputText}>Pseudo</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="pseudo"
                        value={this.state.pseudo}
                        onChangeText={(val) => this.setState({ pseudo: val })}
                        customStyle={style.field}
                    />

                    <DatePicker />

                    <Text style={style.inputText}>E-mail *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required, email]}
                        name="email"
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                        customStyle={style.field}
                    />

                    <Text style={style.inputText}>Mot de passe *</Text>
                    <Input
                        validations={required}
                        name="password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                        style={style.field}
                    />

                    <Text style={style.inputText}>Confirmer le mot de passe *</Text>
                    <Input
                        required
                        component={InputField}
                        validations={[required]}
                        name="confirmPassword"
                        secureTextEntry={true}
                        value={this.state.confirmPassword}
                        onChangeText={(val) => this.setState({ confirmPassword: val })}
                        style={style.field}
                    />

                    <Text style={style.inputText}>Code de parrainage *</Text>
                    <Container style={style.container}>
                        <CheckBox
                            checked={this.state.one}
                            onPress={() => { this.onePressed(); { alert('Entrez votre code de parrainage') } }}
                            checkedColor='#FDC500'
                        />
                        <Text style={{ fontFamily: 'Tinos' }}>Oui</Text>

                        <CheckBox
                            checked={this.state.two}
                            onPress={() => this.twoPressed()}
                            checkedColor='#FDC500'
                        />
                        <Text style={{ fontFamily: 'Tinos' }}>Non</Text>
                    </Container>


                    <Text style={style.inputText}>Entrez votre code de parrainage *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="code"
                        secureTextEntry={true}
                        value={this.state.code}
                        onChangeText={(val) => this.setState({ code: val })}
                        customStyle={style.field}
                    />
                </Form>
                <CustomButton label="Valider" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />


            </ScrollView>
        );
    }
}




const style = {
    field: {
        borderColor: '#FDC500',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18
    },
    inputText: {
        fontFamily: 'Tinos',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 25

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
    }


}

const mapStateToProps = (state) => ({
    ...state
  })


const mapDispatchToProps = {
    createUser

  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyForm)
  