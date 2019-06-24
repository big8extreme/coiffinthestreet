import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Alert, Text } from "react-native";

export default class MessageTextInput extends Component {
    constructor(props) {
        super(props);
        this.message=''
    }
    typedMessage(text) {
        this.message= text
    }
    FloatingButtonEvent = () => {
        Alert.alert("Votre message " + this.message + " a été envoyé");
    }
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.contactTextTitle}>Message :</Text>
                    <View style={styles.contactTextInput_container}>
                        <TextInput
                            style={styles.contactTextInput}
                            numberOfLines={10}
                            placeholder='Ecrire votre requête ici'
                            onChangeText={(text) =>this.typedMessage(text)}
                            underlineColorAndroid='transparent' />
                    </View>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
                        <Image
                            style={styles.buttonSendMessage}
                            source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5cde71ea3df51a7707364198/5cf7a5728309fb2b4730b0e6/05013e40e62b36f109dac7ba1c08f0f6/BTN_Envoyer.png' }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contactTextInput_container: {
        flex: 2,
        marginBottom: 11,
        alignItems: 'center'
    },
    contactTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1F0C7',
        fontFamily: 'Roboto',
        margin: 11,
    },
    contactTextInput: {
        height: 200,
        width: 300,
        backgroundColor: 'white',
        borderColor: '#FDC500',
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Roboto',
        marginBottom: 11
    },
    buttonSendMessage: {
        height: 79,
        width: 311,
        marginBottom: 11
    },
})
