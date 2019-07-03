import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text } from "react-native";
import { Container, Content, Form, Textarea} from 'native-base';

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
                                <Textarea rowSpan={5} placeholder="Tapez votre texte"capInsets={{left: 2, right: 2, bottom: 0, top: 0}} />
                            </Form>
                        </Content>
                    </Container>
                
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
    form:{
        width:300,
        height:200,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'rgb(253,197,0)',
        borderRadius:5,
        marginBottom:30,
    },
    contactTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1F0C7',
        margin: 11,
    },
    buttonSendMessage: {
        height: 79,
        width: 311,
        marginBottom: 11
    },
})