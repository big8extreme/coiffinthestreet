import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class LogoContact extends Component {
    render() {
        return (
            <View style={styles.logo}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5cde71ea3df51a7707364198/5cf7a581a1c167385ede8fd4/d51a785a1b179380591867091a93d7a8/Logo_light.png' }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logo: {
        flex: 3,
        marginTop: 30,
        marginBottom: 40,
        alignItems: 'center'
    },
    img: {
        height: 120,
        width: 220,
        padding: 5,
    }
})