
import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TextInput, Button, ScrollView } from 'react-native';

import RequestPicker from './requestPicker';
import RequestList from './RequestList';






export default class Contact extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        <ScrollView>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5cde71ea3df51a7707364198/5cf7a581a1c167385ede8fd4/d51a785a1b179380591867091a93d7a8/Logo_light.png' }} />
          </View>
          <RequestList />
          <Text style={styles.contactTextTitle}>Message :</Text>
          
          
          <View style={styles.contactTextInput_container}>
            <TextInput
              style={styles.contactTextInput}
              numberOfLines={10}
              placeholder='Ecrire votre requête ici'
              underlineColorAndroid='transparent' />
          </View>
          <Button title='Envoyer votre message' color="#841584" accessibilityLabel="Send a message"
            onPress={() => { }} />
          <View>
            <Image
              style={styles.buttonSendMessage}
              source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5cde71ea3df51a7707364198/5cf7a5728309fb2b4730b0e6/05013e40e62b36f109dac7ba1c08f0f6/BTN_Envoyer.png' }} />
          </View>
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
    margin: 40,
    alignItems: 'center'
  },
  img: {
    height: 120,
    width: 220,
    padding: 5,

  },
  contactTextInput_container: {
    flex: 2,
    marginBottom: 11,
    alignItems: 'center'
  },
  contactTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1F0C7',
    fontFamily: 'Georgia',
    margin: 10,
  },
  contactTextInput: {
    height: 200,
    width: 300,
    backgroundColor: 'white',
    borderColor: '#FDC500',
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: 'Georgia',
  },
  buttonSendMessage: {
    height: 79,
    width: 311,
    marginBottom: 11

  }






})