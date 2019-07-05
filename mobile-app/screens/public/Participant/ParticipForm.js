import React, { Component } from 'react';
import { FlatList, Text, View, Alert, ScrollView } from 'react-native';
import { Input, Form, Item } from 'native-base';
import ValidateButton from '../../../components/ValidateButton';
import { styles } from 'ansi-colors';

const requiredFields = ['email', 'city', 'lastname', 'firstname', 'job']
const defaultParticipant = {
    errors: [],
    email: '',
    city: '',
    lastname: '',
    firstname: '',
    job: '',
    FlatListItems: [
        { item: 'Coiffeur' },
        { item: 'Photographe' },
        { item: 'Esthéticien(ne)' },
    ]
};

export default class ParticipForm extends Component {
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
            this.setState({ ...defaultParticipant })
        }
        this.sendForm();
    }

    sendForm = async () => {
        const response = await this.props.createParticipant(this.state);
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

    GetItem = (item) => {
        this.setState({ job: item })
        Alert.alert("Vous avez sélectionné " + item);
    }

    render() {
        return (
            <ScrollView>
                <Form style={{ marginTop: 30, justifyContent: 'center' }}>
                    <Text style={styles.inputText}>Nom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("lastname") ? "red" : "#FDC500" }}>
                        <Input
                            name="lastname"
                            value={this.state.lastname}
                            onChangeText={(value) => this.handleTextChange({ name: 'lastname', value })}
                            style={styles.field}
                            placeholder="Nom du participant"
                        />
                    </Item>
                    <Text style={styles.inputText}>Prénom *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("firstname") ? "red" : "#FDC500" }}>
                        <Input
                            name="firstname"
                            value={this.state.firstname}
                            onChangeText={(val) => this.setState({ firstname: val })}
                            style={styles.field}
                            placeholder="Prénom du participant"
                        />
                    </Item>
                    <Text style={styles.inputText}>E-mail *</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("email") ? "red" : "#FDC500" }}>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChangeText={(val) => this.setState({ email: val })}
                            style={styles.field}
                            placeholder="Adresse mail du participant"
                        />
                    </Item>
                    <View style={styles.FlatList_container} >
                        <FlatList style={styles.container}
                            keyExtractor={(item, index) => { console.log('test1', item.id), item.id }}
                            data={[{ key: 'coiffeur' }, { key: 'photographe' }]}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) => <Text onPress={this.GetItem.bind(this, item.key)}> {item.key} </Text>}
                        />
                    </View>
                    <Text style={styles.inputText}>Ville*</Text>
                    <Item regular style={{ borderColor: this.state.errors.includes("city") ? "red" : "#FDC500" }}>
                        <Input
                            name="city"
                            value={this.state.city}
                            onChangeText={(val) => this.setState({ city: val })}
                            style={styles.field}
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
    inputText: {
        fontFamily: 'Georgia',
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
    FlatList_container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginLeft: 11,
    }
}