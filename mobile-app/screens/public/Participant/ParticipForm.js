import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert,TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Container, Form, Item } from 'native-base';
// import { Form, Field } from 'react-native-validate-form';
import { CheckBox } from 'react-native-elements';
import InputField from '../SignupForm/InputField';
import ValidateButton from '../../../components/ValidateButton';
import RequestProfession from './RequestProfession';

// const required = value => (value ? undefined : 'This is a required field.');
// const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'city', 'lastname', 'firstname', 'job']
const defaultParticipant = {
    errors: [],
    // email: '',
    // city: '',
    // lastname: '',
    // firstname: '',
    email: '',
    city: '',
    lastname: '',
    firstname: '',
    job:'',
    // FlatListItems: [
    //     { item: 'Coiffeur' },
        // { item: 'Photographe' },
        // { item: 'Esthéticien(ne)' },
    // ]
    // one: false,
    // two: false,
    // itemChecked: false,
    // code: ''
};

export default class ParticipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultParticipant
        }
    }

    submitForm = () => {
        console.log('state before submit1', this.state)
        let errors = [];
        requiredFields.forEach((field) => {
            if (this.state[field].length === 0) {
                errors.push(field)
            }
        })
        this.setState({ errors: errors });
        if (errors.length === 0) {
            console.log('state before submit2', this.state)
            this.props.createParticipant(this.state)
            this.setState({ ...defaultParticipant })
            console.log('state before submit3', this.state)
        }

    }

    handleTextChange = (event) => {
        this.setState({ [event.name]: event.value })
        console.log('check the name', event.name)
        console.log('check the value', event.value)
        console.log('check the states', this.state)
        let { errors } = this.state;
        if (errors.includes(event.name)) {
            const index = errors.indexOf(event.name)
            errors.splice(index, 1)
            this.setState({ errors })
        }
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
        );
    };
    GetItem(item) {
        console.log('le state avant', this.state)
        this.setState({job: item})
        console.log('le state après', this.state)
        Alert.alert("Vous avez sélectionné " + item);
    }

    // submitSuccess() {
    //     console.log("Submit Success!");
    // }

    // submitFailed() {
    //     console.log("Submit Failed!");
    // }

    render() {
        console.log('render', this.state)

        return (
            <ScrollView>
                <Form
                    // ref={(ref) => this.ParticipForm = ref}
                    // validate={true}
                    // submit={this.submitSuccess.bind(this)}
                    // failed={this.submitFailed.bind(this)}
                    // errors={this.state.errors}
                    style={{ marginTop: 30, justifyContent: 'center' }}
                >
                    <Text style={{
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 25
    }}
                    >Nom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("lastname") ? "red" : "#FDC500" }}>
                        <Input
                            name="lastname"
                            value={this.state.lastname}
                            onChangeText={(val) => this.handleTextChange({ name: 'lastname', val })}
                            style={{
                                borderColor: '#FDC500',
                                height: 60,
                                borderWidth: 1,
                                width: '90%',
                                borderRadius: 5,
                                paddingLeft: 5,
                                fontSize: 18
                            }}
                            placeholder="Nom du participant"
                        />
                    </Item>
                    <Text style={{
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 25
    }}>Prénom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("firstname") ? "red" : "#FDC500" }}>
                        <Input
                            name="firstname"
                            value={this.state.firstname}
                            onChangeText={(val) => this.handleTextChange({ name: "firstname", val })}
                            style={{
                                borderColor: '#FDC500',
                                height: 60,
                                borderWidth: 1,
                                width: '90%',
                                borderRadius: 5,
                                paddingLeft: 5,
                                fontSize: 18
                            }}
                            placeholder="Prénom du participant"
                        />
                    </Item>

                    <Text style={{
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 25
    }}>E-mail *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("email") ? "red" : "#FDC500" }}>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChangeText={(val) => this.handleTextChange({ name: 'email', val })}
                            style={{
                                borderColor: '#FDC500',
                                height: 60,
                                borderWidth: 1,
                                width: '90%',
                                borderRadius: 5,
                                paddingLeft: 5,
                                fontSize: 18
                            }}
                            placeholder="Adresse mail du participant"
                        />
                    </Item>
                    <View style={{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginLeft: 11,
    }} >
                        <FlatList style={{
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: '#FDC500',
                            borderRadius: 10,
                            padding: 10,
                            width: '90%',
                            marginLeft: 11,
                            }}
                            
                            keyExtractor={(item, index) => {console.log('test1', item.id), item.id}}

                            data={[{key:'coiffeur'}, {key:'photographe'}]}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => <Text onPress={this.GetItem.bind(this, item.key)}> {item.key} </Text>}
                        />
                    </View>
                    {/* <RequestProfession /> */}

                    <Text style={{
                        fontFamily: 'Georgia',
                        fontWeight: 'bold',
                        marginBottom: 5,
                        marginTop: 25
                    }}>Ville*</Text>

                    <Item regular style={{ borderColor: this.state.errors.includes("city") ? "red" : "#FDC500" }}>
                        <Input
                            name="city"
                            value={this.state.city}
                            onChangeText={(val) => this.handleTextChange({ name: 'city', val })}
                            style={{
                                borderColor: '#FDC500',
                                height: 60,
                                borderWidth: 1,
                                width: '90%',
                                borderRadius: 5,
                                paddingLeft: 5,
                                fontSize: 18
                            }}
                            placeholder="Ville du participant"
                        />
                    </Item>
                </Form>
                <ValidateButton onPress={this.submitForm} label="Valider" />
            </ScrollView>
        );
    }
}

// const style = {
//     field: {
//         borderColor: '#FDC500',
//         height: 60,
//         borderWidth: 1,
//         width: '90%',
//         borderRadius: 5,
//         paddingLeft: 5,
//         fontSize: 18
//     },
//     inputText: {
//         fontFamily: 'Georgia',
//         fontWeight: 'bold',
//         marginBottom: 5,
//         marginTop: 25
//     },
//     container: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: 50,
//     },
//     FlatList_container: {
//         backgroundColor: 'white',
//         borderWidth: 2,
//         borderColor: '#FDC500',
//         borderRadius: 10,
//         padding: 10,
//         width: '90%',
//         marginLeft: 11,
//     },
//     buttonText: {
//         marginTop: 82,
//         marginLeft: 120,
//         position: 'absolute',
//         fontFamily: 'Sedgwick',
//         fontSize: 30,
//         zIndex: 900,
//         color: '#FDC500'
//     }
// }