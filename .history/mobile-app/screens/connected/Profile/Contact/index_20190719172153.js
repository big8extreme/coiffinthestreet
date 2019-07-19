
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import MessageTextInput from './MessageTextInput';
import PickerTextAndItemStyleExample from './Dropdown';
import CustomButton from '../../../../components/CustomButton';
import console = require('console');


export default class Contact extends Component {

  loginUser = async () => {
    console.log(this.state)
    // const response = await this.props.login(this.state.email, this.state.password);
    // if (response.status === 'error') {
    //   Toast.show({
    //     text: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
    //     buttonText: 'Ok'
    //   })
    // } else if (response.status === 'success') {
    //   Toast.show({
    //     text: "Votre message a été envoyé.",
    //     buttonText: 'Ok'
    //   })
    //   setTimeout(() => {
    //     this.props.navigation.navigate('BottomTab')
    //   }, 500)
    // }
  }

  render() {
    return (

      <ScrollView style={{ backgroundColor: '#2D2D2D', minHeight: '100%' }}>
        <View style={styles.logo}>
          <Image source={require('../../../../assets/Logo_light.png')} />
        </View>
        <PickerTextAndItemStyleExample />
        <MessageTextInput />
        <CustomButton
          label="Envoyer"
          fontSize={25}
          colorfill="#FDC500"
          onPressFunc={() => this.sendMessage()} />
          </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },
})
