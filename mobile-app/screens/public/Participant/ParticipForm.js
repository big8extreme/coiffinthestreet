import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Picker, Form, Item } from 'native-base';
import { connect } from 'react-redux';
import { createParticipant } from '../../../store/actions/participant';
import ValidateButton from './../../../components/ValidateButton';
import { Toast, Root } from 'native-base';

const requiredFields = ['email', 'city', 'lastName', 'firstName', 'job']

const jobs = [
    { item: 'Coiffeur' },
    { item: 'Photographe' },
    { item: 'Esthéticien(ne)' }
]

const defaultParticipant = {
    maraudeId: null,
    isValidate: false,
    email: '',
    city: '',
    lastName: '',
    firstName: '',
    job: 'Coiffeur'
};

export class ParticipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participant: {
                ...defaultParticipant,
            },
            errors: [],
        }
    }

    _keyExtractor = (item, index) => item.key;

    componentDidMount() {
        if (this.props.auth.user.isConnected) {
            this.setState({ ...this.state, participant: { ...this.state.participant, ...this.props.auth.user } })
        }
    }

    submitForm = () => {
        let errors = [];
        requiredFields.forEach((field) => {
            if (this.state.participant[field].length < 1) {
                errors.push(field)
            }
        })
        this.setState({ errors: [...errors] });
        let { participant } = this.state;
        participant.maraudeId = this.props.maraudeId
        if (errors.length < 1) {
            this.props.createParticipant(participant)
            this.setState({ participant: { ...this.state.participant, ...defaultParticipant } })
            this.props.navigation.navigate('Map')
        }
    }

    resetError(field) {
        let { errors } = this.state;
        if (errors.includes(field)) {
            const index = errors.indexOf(field)
            errors.splice(index, 1)
            this.setState({ errors })
        }
    }

    GetItem(item) {
        this.setState({ ...this.state, participant: { ...this.state.participant, job: item } })
        this.resetError('job')
        Alert.alert("Vous avez sélectionné la profession " + `"${item}"`);
    }

    render() {
        return (
            <Root>
                <ScrollView>
                    <Form
                        style={{ marginTop: 30, justifyContent: 'center' }}
                    >
                        <Text style={styles.title}>Inscription en tant que participant</Text>
                        <Text style={styles.text}>Nom *</Text>
                        <Item regular style={{ borderColor: this.state.errors.includes("lastName") ? "red" : "white" }}>
                            <Input
                                value={this.state.participant.lastName}
                                onChangeText={(value) => {
                                    this.setState({ ...this.state, participant: { ...this.state.participant, lastName: value } })
                                    this.resetError('lastName')
                                }}
                                style={styles.field}
                                placeholder="Nom du participant"
                            />
                        </Item>
                        <Text style={styles.text}>Prénom *</Text>
                        <Item regular style={{ borderColor: this.state.errors.includes("firstName") ? "red" : "white" }}>
                            <Input
                                value={this.state.participant.firstName}
                                onChangeText={(value) => {
                                    this.setState({ ...this.state, participant: { ...this.state.participant, firstName: value } })
                                    this.resetError('firstName')
                                }}
                                style={styles.field}
                                placeholder="Prénom du participant"
                            />
                        </Item>

                        <Text style={styles.text}>E-mail *</Text>
                        <Item regular style={{ borderColor: this.state.errors.includes("email") ? "red" : "white" }}>
                            <Input
                                value={this.state.participant.email}
                                onChangeText={(value) => {
                                    this.setState({ ...this.state, participant: { ...this.state.participant, email: value } })
                                    this.resetError('email')
                                }}
                                style={styles.field}
                                placeholder="Adresse mail du participant"
                            />
                        </Item>
                        <Text style={styles.text}>Profession *</Text>
                        <Item regular style={{ borderColor: this.state.errors.includes("job") ? "red" : "white" }}>
                            <Picker
                                selectedValue={this.state.participant.job}
                                style={{ ...styles.field, width: '98%' }}
                                mode="dropdown"
                                placeholder="Votre profession"
                                placeholderStyle={{ paddingLeft: 10, color: '#666666', fontFamily: 'Tinos', fontSize: 18, }}
                                textStyle={{ color: 'black', paddingLeft: 10, fontSize: 18, fontFamily: 'Tinos', fontWeight: 'bold' }}
                                onValueChange={(itemValue, itemIndex) => {
                                    console.log("ITEM VALUE", itemValue)

                                    return (
                                        this.setState({
                                            ...this.state,
                                            participant: {
                                                ...this.state.participant,
                                                job: itemValue
                                            }
                                        })
                                    )
                                }}>
                                {
                                    jobs.map((job, idx) => {
                                        return <Picker.Item key={`job-${idx}`} label={job.item} value={job.item} />
                                    })
                                }
                            </Picker>
                        </Item>
                        <Text style={styles.text}>Ville*</Text>
                        <Item regular style={{ borderColor: this.state.errors.includes("city") ? "red" : "white" }}>
                            <Input
                                value={this.state.participant.city}
                                onChangeText={(value) => {
                                    this.setState({ ...this.state, participant: { ...this.state.participant, city: value } })
                                    this.resetError('city')
                                }}
                                style={styles.field}
                                placeholder="Ville du participant"
                            />
                        </Item>
                    </Form>
                    <ValidateButton
                        onPress={this.submitForm.bind(this)} label="Valider"
                    />
                </ScrollView>
            </Root >
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 2,
        width: '90%',
        borderRadius: 10,
        padding: 5,
        fontSize: 18,
        marginLeft: 11,
        marginRight: 11
    },
    text: {
        fontFamily: 'Tinos',
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
    }
});
const mapStateToProps = (state) => ({
    auth: state.auth
})
const mapDispatchToProps = {
    createParticipant
}

// // @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ParticipForm)
