import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, ScrollView } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import InputField from './InputField';
import AvatarUpload from './Avatar';
import { signup } from '../../../store/actions/auth';
import { Toast, Root } from 'native-base';

import CustomButton from '../../../components/CustomButton';


const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'firstName', 'name', 'pseudo', 'password', 'invitationCode', 'confirmPassword']

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
            loading: false
        }
    }

    submitForm = async () => {
        this.setState({ loading: true })
        let errors = [];
        requiredFields.forEach(item => {
            if (this.state[item].length < 1) {
                errors.push({ field: item, error: "Can't be blank !" });
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
            } else {
                Toast.show({
                    text: "Erreur lors de l'inscription",
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
                <ScrollView style={{ margin: 30 }}>

                    <AvatarUpload onSelected={(file) => this.setState({ avatar: file })} />

                    <Form
                        ref={(ref) => this.myForm = ref}
                        validate={true}
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
                            name="code"
                            secureTextEntry={true}
                            value={this.state.code}
                            onChangeText={(val) => this.handleTextChange('invitationCode', val)}
                            customStyle={style.field}
                        />
                    </Form>
                    <CustomButton label="Valider" navigation={this.props.navigation} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />



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

})

const mapDispatchToProps = {
    signup
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm)
