import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Content, Form, Item, Input, Button } from 'native-base'
import baseUrl from '../../../apiUrl'
import Axios from 'axios'

export default class MaraudeCreationForm extends Component {
  componentDidMount = async () => {
    Axios.post(`${baseUrl}/maraudes`)
    .then((response) => { console.log(response); })
    .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <ScrollView>
        <Content>
          <Form>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 26 }}>
              Créer une Maraude </Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Titre de la maraude : </Text>
            <Item regular style={{borderColor: 'transparent'}}>
              <Input
                style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="NOM Maraude" />
            </Item>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Date :</Text>
            <Item regular style={{borderColor: 'transparent'}}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="JJ/MM/AA" />
            </Item>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Heure de début :</Text>
            <Item regular style={{borderColor: 'transparent'}}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="hh:mm" />
            </Item>
            <Text style={{ fontSize: 10, marginBottom: 15 }}>Heure approximative</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Heure de fin :</Text>
            <Item regular style={{borderColor: 'transparent'}}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="hh:mm" />
            </Item>
            <Text style={{ fontSize: 10, marginBottom: 15 }}>Heure approximative</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Lieu :</Text>
            <Item regular style={{borderColor: 'transparent'}}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="Ville" />
            </Item>
            <Button 
            title="Créer la maraude"
            onPress={() => this.props.logout()}
            />
          </Form>
        </Content>
      </ScrollView>
    )
  }
}
/*
const style = {
  input: {
    borderColor: '#FDC500', borderWidth: 2
  }
}
*/