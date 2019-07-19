import React, { Component } from 'react';
import MessageTextInput from './MessageTextInput';
import PickerTextAndItemStyleExample from './Dropdown';
import CustomButton from '../../../../components/CustomButton';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Alert, Text } from "react-native";
import { Container, Content, Form, Textarea, Input } from 'native-base';

const subjects = [
  'Problème technique',
  'Problème avec un participant',
  'Problème avec un sans-abris',
  'Message de soutien',
  'Autre'
]

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // errors: [],
      subject: subjects[0],
      mesage: '',
    }
  }
  sendMessage = async () => {
    console.log(this.state);
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

  onValueChange(value) {
    this.setState({
        selected: value
    });
}

  render() {
    return (

      <ScrollView style={{ backgroundColor: '#2D2D2D', minHeight: '100%' }}>
        <View style={styles.logo}>
          <Image source={require('../../../../assets/Logo_light.png')} />
        </View>
        <PickerTextAndItemStyleExample />
        {/* <MessageTextInput onSelected={(mesage) => this.setState({ mesage: mesage })}/> */}
        <View>

          <Text style={styles.contactTextTitle}>Message :</Text>
          <Container style={styles.form}>

            <Content >
                <Textarea
                  onChangeText={(val) => this.setState({ mesage: val })}
                  placeholder="Tapez votre texte"
                />
            </Content>
          </Container>
        </View>
        <CustomButton
          label="Envoyer"
          fontSize={25}
          colorfill="#FDC500"
          onPressFunc={() => this.sendMessage()} />
      </ScrollView>

    );
  }
}

// const styles = StyleSheet.create({
//   logo: {
//     alignSelf: 'center',
//     marginTop: 30,
//     marginBottom: 30
//   },
// })

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  form: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(253,197,0)',
    borderRadius: 5,
    marginBottom: 60,
    fontFamily: 'Tinos'
  },
  contactTextTitle: {
    fontSize: 20,
    color: 'rgb(241,240,199)',
    margin: 22,
    fontFamily: 'Tinos_bold'
  },
})
