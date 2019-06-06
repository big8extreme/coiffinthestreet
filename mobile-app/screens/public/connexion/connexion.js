import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class StackedLabelExample extends Component {
    render() {
        return (
            <View style={styles.backgroundApp}>
                <View style={styles.flexCenterImg}>
                    <Image
                        source={require('./Logo_light.png')}
                    />
                </View>
                <View style={styles.flexCenter}>
                    <Text style={styles.whiteTextLabel}>Email :</Text>
                <View style={styles.yellowBorder}>
                    <TextInput placeholder='Entrez votre email'></TextInput>
                    </View>
                    <Text style={styles.whiteTextLabel}>Mot de passe :</Text>
                    <View style={styles.yellowBorder}>
                    <TextInput placeholder='******' secureTextEntry={true}></TextInput>
                    </View>
                </View>
                <View style={styles.flexCenterImg}>
                    <Image style={styles.button}
                        source={require('./connect.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#3F3F3F', flex: 1,
    },

    flexCenterImg: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },

    flexCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },

    whiteTextLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,

    },

    yellowBorder: {
        borderBottomColor: '#FDC500',
        borderBottomWidth: 3,
        marginBottom: 30,
},
button: {
    marginTop: 60,
    },
});