import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';
import { Input, Container, } from 'native-base';
import { Form, Field } from 'react-native-validate-form';
import { CheckBox } from 'react-native-elements';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import DatePicker from './DatePicker';
import ValidateButton from '../../../components/SendButton';

const required = value => (value ? undefined : 'This is a required field.');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            email: '',
            pseudo: '',
            name: '',
            firstname: '',
            password: null,
            confirmPassword: null,
            one: false,
            two: false,
            itemChecked: false,
            code: ''
        }
    }


    onePressed() {
        this.setState({ one: true, two: false })
    }

    twoPressed() {
        this.setState({ one: false, two: true })
    }

    submitForm() {
        let submitResults = this.myForm.validate();
        let errors = [];
        submitResults.forEach(item => {
            errors.push({ field: item.fieldName, error: item.error });
        });
        this.setState({ errors: errors });
    }

    submitSuccess() {
        console.log("Submit Success!");
    }

    submitFailed() {
        console.log("Submit Failed!");
    }

    render() {

        return (

            <ScrollView>

                <AvatarUpload />

                <Form
                    ref={(ref) => this.myForm = ref}
                    validate={true}
                    submit={this.submitSuccess.bind(this)}
                    failed={this.submitFailed.bind(this)}
                    errors={this.state.errors}
                    style={{ marginTop: 30, justifyContent: 'center' }}
                >
                    <Text style={style.inputText}>Nom *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="name"
                        value={this.state.name}
                        onChangeText={(val) => this.setState({ name: val })}
                        customStyle={style.field}
                    />

                    <Text style={style.inputText}>Prénom *</Text>
                    <Field
                        required
                        component={InputField}
                        validations={[required]}
                        name="firstname"
                        value={this.state.firstname}
                        onChangeText={(val) => this.setState({ firstname: val })}
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
                        <Text style={{ fontFamily: 'Roboto' }}>Oui</Text>
                    </Container>
                    <Container style={style.container}>
                        <CheckBox
                            checked={this.state.two}
                            onPress={() => this.twoPressed()}
                            checkedColor='#FDC500'
                        />
                        <Text style={{ fontFamily: 'Roboto' }}>Non, je n'ai pas de parrain</Text>
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
                <ValidateButton onPress={this.submitForm.bind(this)} label="Valider" />
            </ScrollView>
        );
    }
}

const style = {
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 1,
        width: '90%',
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 18
    },
    inputText: {
        fontFamily: 'Roboto',
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
        fontSize: 30,
        zIndex: 900,
        color: '#FDC500'
    }
}