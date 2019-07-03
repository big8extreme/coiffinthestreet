import React, { Component } from 'react';

import { Text, TouchableOpacity, Image, ScrollView, View } from 'react-native';

import { Input, Container, Toast } from 'native-base';

import { Form, Field } from 'react-native-validate-form';

import { CheckBox } from 'react-native-elements';

import InputField from './InputField';

import AvatarUpload from './Avatar';

import ValidateButton from './ValidateButton';

import { signup } from '../../../store/actions/auth';

import { connect } from 'react-redux';



const required = value => (value ? undefined : 'This is a required field.');

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;



class MyForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            errors: [],

            email: '',

            // pseudo: '',

            lastname: '',

            firstname: '',

            // password: "",

            // confirmPassword: "",

            // one: false,

            // two: false,

            // code: ''

        }

    }


    // onePressed() {

    //     this.setState({ one: true, two: false })

    // }



    // twoPressed() {

    //     this.setState({ one: false, two: true })

    // }



    submitForm() {

        console.log('submitForm')

        let submitResults = this.myForm.validate();

        let errors = [];

        // console.log(submitResults)



        // submitResults.forEach(item => {

        //     errors.push({ field: item.fieldName, error: item.error });

        // });



        // if(errors){

        //     this.setState({ errors: errors });

        // }



        //axios



        console.log('sending form');

        console.log(this.state);

        this.signupUser();

    }



    submitSuccess() {

        console.log("Submit Success!");

    }



    submitFailed() {

        console.log("Submit Failed!");

    }



    signupUser = async () => {

        const response = await this.props.signup(this.state);

        if (response.status === 'error') {

            Toast.show({

                text: 'Erreur de connexion',

                buttonText: 'Ok'

            })

        } else if (response.status === 'success') {

            this.props.navigation.navigate('App')

        }

    }

    render() {



        return (

            <ScrollView>


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

                        lastname="lastname"

                        key="lastname"

                        value={this.state.lastname}

                        onChangeText={(val) => this.setState({ lastname: val })}

                        customStyle={style.field}

                    />


                    <Text style={style.inputText}>Prénom *</Text>

                    <Field

                        required

                        component={InputField}

                        validations={[required]}

                        name="firstname"

                        key="firstname"

                        value={this.state.firstname}

                        onChangeText={(val) => this.setState({ firstname: val })}

                        customStyle={style.field}

                    />


                    <Text style={style.inputText}>E-mail *</Text>

                    <Field

                        required

                        component={InputField}

                        validations={[required, email]}

                        name="email"

                        key="email"

                        value={this.state.email}

                        onChangeText={(val) => this.setState({ email: val })}

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

    },

}



const mapStateToProps = (state) => ({

    // auth: state.auth

})



const mapDispatchToProps = {

    signup

}



// @ts-ignore

export default connect(mapStateToProps, mapDispatchToProps)(MyForm)