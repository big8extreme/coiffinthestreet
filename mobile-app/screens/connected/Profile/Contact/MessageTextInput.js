import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Container, Content, Form, Textarea } from 'native-base';
export default class MessageTextInput extends Component {
  onValueChange(field, value) {
    this.props.handleChange(field, value)
  }
  render() {
    return (
      <View>
        <Text style={styles.contactInfo}>*Tous les champs sont obligatoires</Text>
        <Form >
          <Textarea style={styles.miniForm}
            placeholder="Entrez votre Email"
            onChangeText={(value) => this.onValueChange('email', value)}
          />
        </Form>
        <Form >
          <Textarea style={styles.miniForm}
            placeholder="Entrez votre Nom"
            onChangeText={(value) => this.props.handleChange('lastName', value)}
          />
        </Form>
        <Form >
          <Textarea style={styles.miniForm}
            placeholder="Entrez votre Prenom"
            onChangeText={(value) => this.props.handleChange('firstName', value)}
          />
        </Form>
        <Text style={styles.contactTextTitle}>Message :</Text>
        <Container style={styles.form}>
          <Content >
            <Form >
              <Textarea
                placeholder="Saisir votre message"
                onChangeText={(value) => this.props.handleChange('message', value)}
              />
            </Form>
          </Content>
        </Container>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(253,197,0)',
    borderRadius: 5,
    marginBottom: 60,
  },
  miniForm: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(253,197,0)',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: 'white',
    fontFamily: 'Tinos'
  },
  contactTextTitle: {
    fontSize: 20,
    color: 'rgb(253,197,0)',
    margin: 22,
    fontFamily: 'Tinos_bold',
    marginLeft: 60,
  },
  contactInfo: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'rgb(253,197,0)',
    margin: 22,
    marginLeft: 62,
  }
})