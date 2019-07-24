import React, { Component } from 'react';
import { connect } from 'react-redux'
import { contactAdmin } from '../../../../store/actions/config'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import MessageTextInput from './MessageTextInput';
import PickerTextAndItemStyleExample from './Dropdown';
import CustomButton from '../../../../components/CustomButton';
import { Toast, Root } from 'native-base';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      subject: 'Problème technique',
      message: ''
    };
  }
  sendMessage = async () => {
    console.log("Enter here")
    if (this.state.message === '') {
      return Toast.show({
        text: "Veuillez taper votre message.",
        type: 'danger',
        buttonText: 'Ok'
      })
    } else {
      const response = await this.props.contactAdmin(this.state);
      if (response.status === 'error') {
        Toast.show({
          text: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
          type: 'danger',
          buttonText: 'Ok'
        })
      } else if (response.status === 'success') {
        Toast.show({
          text: "Votre message a été envoyé.",
          position: 'top',
          type: 'success',
          buttonText: 'Ok'
        })
        setTimeout(() => {
          this.props.navigation.navigate('BottomTab')
        }, 500)
      }
    }
  }
  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }
  render() {
    console.log(this.state.subject)
    return (
      <Root>
        <ScrollView style={{ backgroundColor: '#2D2D2D', minHeight: '100%' }}>
          <View style={styles.logo}>
            <Image source={require('../../../../assets/Logo_light.png')} />
          </View>
          <PickerTextAndItemStyleExample
            handleChange={(value) => this.handleChange('subject', value)}
            subject={this.state.subject}
          />
          <MessageTextInput
            handleChange={(field, value) => this.handleChange(field, value)}
            message={this.state.message}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}

          />
          <CustomButton
            onPressFunc={() => this.sendMessage()}
            label="Envoyer"
            style={{ color: 'yellow' }}

          />
        </ScrollView>
      </Root>
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  contactAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
