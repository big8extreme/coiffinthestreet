import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert,TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Container, Form, Item } from 'native-base';
import {connect} from 'react-redux';
import {createParticipant} from '../../../store/actions/participant';
import ValidateButton from './../../../components/ValidateButton';


const required = value => (value ? undefined : 'This is a required field.');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
const requiredFields = ['email', 'city', 'lastName', 'firstName', 'job']

const defaultParticipant = {
    errors: [],
    maraudeId: 2,
    isValidate: false,
    email: 'ronddoudou@gig.ls',
    city: 'Carlosville',
    lastName: '',
    firstName: 'Casimir',
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
            ...defaultParticipant,
            required,
            email

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
        const response = await this.props.createParticipant(...this.state);
        console.log('sendForm',...state)
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
            <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B", marginLeft:10 }} />
        );
    };
    GetItem(item) {
        this.setState({job: item})
        Alert.alert("Vous avez sélectionné la profession " + `"${item}"`);
    }

    render() {
        return (
            <ScrollView>
                <Form
                    style={{ marginTop: 30, justifyContent: 'center' }}
                >
                    <Text style={styles.text}>Nom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("lastName") ? "red" : "white" }}>
                        <Input
                            name="lastName"
                            value={this.state.lastName}
                            onChangeText={(value) => this.handleTextChange({ name: 'lastName', value })}
                            style={styles.field}
                            placeholder="Nom du participant"
                        />
                    </Item>
                    <Text style={styles.text}>Prénom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("firstName") ? "red" : "white" }}>
                        <Input
                            name="firstName"
                            value={this.state.firstName}
                            onChangeText={(value) => this.handleTextChange({ name: "firstName", value })}
                            style={styles.field}
                            placeholder="Prénom du participant"
                        />
                    </Item>

                    <Text style={styles.text}>E-mail *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("email") ? "red" : "white" }}>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChangeText={(value) => this.handleTextChange({ name: 'email', value })}
                            style={styles.field}
                            placeholder="Adresse mail du participant"
                        />
                    </Item>
                    <Text style={styles.text}>Profession *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("job") ? "red" : "white" }}>
                    <View style={styles.flatListContainer}>                   
                        <FlatList style={styles.container}
                            keyExtractor={(item, index) => {index.id}}
                            data={[{key:'Coiffeur'}, {key:'Photographe'}, {key:'Esthéticien-ne'}]}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => 
                            <Text
                            style= {styles.item} 
                            onPress={this.GetItem.bind(this, item.key)}> {item.key} 
                            </Text>}
                        />
                        
                    </View>
                    </Item>
                    <Text style={styles.text}>Ville*</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("city") ? "red" : "white" }}>
                        <Input
                            name="city"
                            value={this.state.city}
                            onChangeText={(value) => this.handleTextChange({ name: 'city', value })}
                            style= {styles.field}
                            placeholder="Ville du participant"
                        />
                    </Item>
                </Form>
                <ValidateButton onPress={this.submitForm.bind(this)} label="Valider" />
            </ScrollView>
        );
    }
}

const styles = {
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 2,
        width: '90%',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        marginLeft: 11,
        marginRight: 11
    },
    text: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 11,
        marginTop: 25
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 110
    },
    flatListContainer: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        borderRadius: 10,
        width: '70%',
        marginLeft: 11,
    },
    item: {
        padding: 8,
        fontSize: 15
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
    auth: state.auth
})
const mapDispatchToProps = {
    createParticipant
}

// // @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ParticipForm)
