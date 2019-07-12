import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text } from "react-native";
import { Container, Content, Form, Textarea } from 'native-base';

export default class MessageTextInput extends Component {
    constructor(props) {
        super(props);
        this.message = ''
    }
    typedMessage(text) {
        this.message = text
    }
    FloatingButtonEvent = () => {
        Alert.alert("Votre message " + this.message + " a été envoyé");
    }
    render() {
        return (
            <View>

                <Text style={styles.contactTextTitle}>Message :</Text>
                <Container style={styles.form}>

                    <Content >
                        <Form >
                            <Textarea
                                placeholder="Tapez votre texte"
                                
                            />
                        </Form>
                    </Content>
                </Container>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    form: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'rgb(253,197,0)',
        borderRadius: 5,
        marginBottom: 60,
        fontFamily: 'Tinos'
    },
    contactTextTitle: {
        fontSize: 20,
        color: 'rgb(241,240,199)',
        margin: 22,
        fontFamily: 'Tinos_bold'
    },
})