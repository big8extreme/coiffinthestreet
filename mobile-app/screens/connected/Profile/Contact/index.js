
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import MessageTextInput from './MessageTextInput';
import PickerTextAndItemStyleExample from './Dropdown';
import ConnectButton from '../../../../components/ConnectButton';
import GlobalFooter from '../../../../components/GlobalFooter';

export default class Contact extends Component {
  render() {
    return (
      <View style={{minHeight: '100%'}}  >
        <ScrollView style={{ backgroundColor: '#2D2D2D'}}>
        <View style={styles.logo}>
          <Image source={require('../../../../assets/Logo_light.png')} />
        </View>
          <PickerTextAndItemStyleExample />
          <MessageTextInput />
          <ConnectButton />
      </ScrollView>
      <GlobalFooter/>
      </View>
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
