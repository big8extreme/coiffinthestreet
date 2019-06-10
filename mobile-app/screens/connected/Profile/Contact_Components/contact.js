
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LogoContact from'./LogoContact';
import RequestList from './RequestList';
import MessageTextInput from './MessageTextInput';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <ScrollView>
          <LogoContact />
          <RequestList />
          <MessageTextInput />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#4E4E4E',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
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