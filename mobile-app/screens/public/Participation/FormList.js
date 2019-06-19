import React, { Component } from 'react';
import RequestProfession from './RequestProfession';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Alert, Text } from "react-native";

export default class Form extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.Title}>Nom :</Text>
                    <View>
                        <TextInput 
                            style={styles.TextInput}
                            numberOfLines={1}
                            placeholder='...'
                            onChangeText={(text) =>this.typedText(text)}
                            underlineColorAndroid='transparent'
                            />
                    </View>
                </View>
                <View>
                    <Text style={styles.Title}>Prénom :</Text>
                    <View>
                        <TextInput 
                            style={styles.TextInput}
                            numberOfLines={1}
                            placeholder='...'
                            onChangeText={(text) =>this.typedText(text)}
                            underlineColorAndroid='transparent'
                            />
                    </View>
                </View>
                <View>
                    <Text style={styles.Title}>Age :</Text>
                    <View>
                        <TextInput 
                            style={styles.TextInput}
                            numberOfLines={1}
                            placeholder='...'
                            onChangeText={(text) =>this.typedText(text)}
                            underlineColorAndroid='transparent'
                            />
                    </View>
                </View>
                <View>
                    <Text style={styles.Title}>E-mail :</Text>
                    <View>
                        <TextInput 
                            style={styles.TextInput}
                            numberOfLines={1}
                            placeholder='...'
                            onChangeText={(text) =>this.typedText(text)}
                            underlineColorAndroid='transparent'
                            />
                    </View>
                </View>
                <RequestProfession />
                <View>
                    <Text style={styles.Title}>Ville :</Text>
                    <View>
                        <TextInput 
                            style={styles.TextInput}
                            numberOfLines={1}
                            placeholder='...'
                            onChangeText={(text) =>this.typedText(text)}
                            underlineColorAndroid='transparent'
                            />
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
    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Georgia',
        margin: 11,
    },
    TextInput: {
        borderColor: '#FDC500',
        borderWidth: 2,
        height: 60,
        width: '90%',
        marginLeft: 5,
        paddingLeft: 5,
        borderRadius: 5,
        fontSize: 18,
        fontFamily: 'Georgia',
        marginBottom: 11
    },
    buttonSendMessage: {
        height: 79,
        width: 311,
        marginBottom: 11
    },
})
