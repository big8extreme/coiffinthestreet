import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native'

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 40
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 300
    }
})

export default function SwiperComponent({ photo, title, startdAt, description, city }) {

    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View
                style={styles.slide1}
            >
                <Text style={styles.text}>{title}</Text>
                <Text>{description}</Text>
            </View>
            <View style={styles.slide2}>
                <Text style={styles.text}>{title}</Text>
                <Text>{description}</Text>
            </View>
            <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
    )
}


AppRegistry.registerComponent('myproject', () => SwiperComponent);