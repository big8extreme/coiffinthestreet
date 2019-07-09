
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import MessageTextInput from './MessageTextInput';
import PickerTextAndItemStyleExample from './Dropdown';
import SendButton from '../../../../components/SendButton';


export default class Contact extends Component {
  render() {
    return (

      <ScrollView style={{ backgroundColor: '#2D2D2D', minHeight: '100%' }}>
        <View style={styles.logo}>
          <Image source={require('../../../../assets/Logo_light.png')} />
        </View>
<<<<<<< HEAD

        <React.Fragment>
          <PickerTextAndItemStyleExample style={{ position: 'absolute', zIndex: 999 }} />

          <MessageTextInput />
          <SendButton />
        </React.Fragment>
=======
          <PickerTextAndItemStyleExample />
          <MessageTextInput />
          <ValidateButton 
          label="Envoyer"
          style={{color:'yellow'}}
          />
>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
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
