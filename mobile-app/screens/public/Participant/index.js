import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ParticipForm from './ParticipForm';

export default class Participation extends Component {
    render() {
        return (
            <ScrollView style={styles.main_container}>
                <ParticipForm />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white',
    },
})