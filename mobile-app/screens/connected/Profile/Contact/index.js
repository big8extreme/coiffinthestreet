import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { Container, Content, Icon, Picker, Textarea, Toast, Root } from 'native-base';
import { connect } from 'react-redux'
import GlobalFooter from '../../../../components/GlobalFooter';
import { contactAdmin } from '../../../../store/actions/config';
import CustomButton from '../../../../components/CustomButton';


const subjects = [
  'Problème technique',
  'Problème avec un participant',
  'Problème avec un sans-abris',
  'Message de soutien',
  'Autre'
]

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: subjects[0],
      message: ''
    }
  }

  sendMessage = async () => {
    if (this.state.message === '') {
      return Toast.show({
        text: "Veuillez taper votre message.",
        type: 'danger',
        buttonText: 'Ok'
      })
    }
    const response = await this.props.contactAdmin(this.state.email, this.state.password);
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

  render() {
    return (
      <Root style={{flex: 1}}>
        <ScrollView style={{ backgroundColor: '#2D2D2D'}}>
          <View style={styles.logo}>
            <Image source={require('../../../../assets/Logo_light.png')} />
          </View>
          <View>
            <Content >
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={{ color: 'rgb(253,197,0)', marginLeft: -50}} />}
                placeholder="Objet"
                placeholderStyle={{ fontWeight: 'bold'}}
                textStyle={{ color: 'rgb(253,197,0)' }}
                itemStyle={{
                  backgroundColor: "white",
                  marginLeft: 0,
                  paddingLeft: 10,
                }}
                headerTitleStyle={{color: "white"}}
                headerStyle={{backgroundColor: '#2D2D2D'}}
                headerBackButtonText={<Icon name="arrow-dropleft" style={{ color: 'white'}} />}
                itemTextStyle={{ color: 'black' }}
                selectedValue={this.state.subject}
                onValueChange={(val) => this.setState({ subject: val })}
                style={styles.dropdown}
              >
                {
                  subjects.map((subject, idx) => {
                    return <Picker.Item label={subject} value={subject} key={`subject-${idx}`} />
                  })
                }
              </Picker>
            </Content>
            <View style={{width: '90%', alignSelf: 'center', marginBottom: 10 }}>
              <Text style={styles.contactTextTitle}>Message :</Text>
            </View>
            
            <Container style={styles.form}>
              <Content >
                <Textarea
                  onChangeText={(val) => this.setState({ message: val })}
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
        <GlobalFooter/>
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
  form: {
    height: 200,
    width: '90%',
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
    fontFamily: 'Tinos_bold'
  },
  dropdown: {
    borderWidth: 2,
    borderColor: 'rgb(241,240,199)',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
    width: '90%'
  }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  contactAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
