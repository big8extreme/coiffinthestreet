import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert,TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Container, Form, Item } from 'native-base';
import {connect} from 'react-redux';
import {createParticipant} from '../../../store/actions/participant';

import ValidateButton from './ValidateButton';
import RequestProfession from './RequestProfession';

// const required = value => (value ? undefined : 'This is a required field.');
// const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'city', 'lastname', 'firstname', 'job']

const defaultParticipant = {
    errors: [],
    maraudeId: 2,
    isValidate: false,
    age: 34,
    email: '',
    city: '',
    lastname: '',
    firstname: '',
    job:'',
    FlatListItems: [
        { item: 'Coiffeur' },
        { item: 'Photographe' },
        { item: 'Esthéticien(ne)' },
    ]
    
};

export class ParticipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...defaultParticipant
        }
    }

    submitForm = () => {
        let errors = [];
        requiredFields.forEach((field) => {
            if (this.state[field].length === 0) {
                errors.push(field)
            }
        })
        this.setState({ errors: errors });
        if (errors.length === 0) {
            this.props.createParticipant(this.state)
            signupUser = async()=>{
                const response = await this.props
            }
            this.setState({ ...defaultParticipant })
        }
        this.sendForm();
    }

    sendForm = async () => {
        const response = await this.props.createParticipant(this.state);
        console.log('sendForm',this.state)
        if (response.status === 'error') {
            
        } else if (response.status === 'success') {
             
        }
    }

    handleTextChange = (event) => {
        this.setState({ [event.name]: event.value })
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
        this.setState({job: item})
        Alert.alert("Vous avez sélectionné la profession " + `"${item}"`);
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
                    <Text style={styles.text}>Nom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("lastname") ? "red" : "#FDC500" }}>
                        <Input
                            name="lastname"
                            value={this.state.lastname}
                            onChangeText={(value) => this.handleTextChange({ name: 'lastname', value })}
                            style={styles.field}
                            placeholder="Nom du participant"
                        />
                    </Item>
                    <Text style={styles.text}>Prénom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("firstname") ? "red" : "#FDC500" }}>
                        <Input
                            name="firstname"
                            value={this.state.firstname}
                            onChangeText={(value) => this.handleTextChange({ name: "firstname", value })}
                            style={styles.field}
                            placeholder="Prénom du participant"
                        />
                    </Item>

                    <Text style={styles.text}>E-mail *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("email") ? "red" : "#FDC500" }}>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChangeText={(value) => this.handleTextChange({ name: 'email', value })}
                            style={styles.field}
                            placeholder="Adresse mail du participant"
                        />
                    </Item>
                    <Text style={styles.text}>Profession *</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList style={styles.container}
                            keyExtractor={(item, index) => {item.id}}
                            data={[{key:'coiffeur'}, {key:'photographe'}]}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => <Text onPress={this.GetItem.bind(this, item.key)}> {item.key} </Text>}
                        />
                    </View>
                    <Text style={styles.text}>Ville*</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("city") ? "red" : "#FDC500" }}>
                        <Input
                            name="city"
                            value={this.state.city}
                            onChangeText={(value) => this.handleTextChange({ name: 'city', value })}
                            style= {styles.field}
                            placeholder="Ville du participant"
                        />
                    </Item>
                </Form>
                <ValidateButton onPress={this.submitForm} label="Valider" />
            </ScrollView>
        );
    }
}

const styles = {
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 1,
        width: '90%',
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 18
    },
    text: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 25
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
    },
    flatListContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginLeft: 11,
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





const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {
    createParticipant
}

// // @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ParticipForm)