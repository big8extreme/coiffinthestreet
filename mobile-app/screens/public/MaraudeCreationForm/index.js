import React, { Component } from 'react'
import { View, Text } from 'react-native'
//import { Content, Form, Item, Input } from 'native-base'
import { Content, ListItem, Button } from 'native-base'

export default class MaraudeCreationForm extends Component {

  render() {
    return (
      <View style={{
        height: 800,
        margin: 3,
        backgroundColor: 'black'
      }}>
        
          {/* <Content>
            <Form>
              <Text style={{fontWeight: 'bold', fontSize: 26}}>
                Créer une Maraude </Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Titre de la maraude : </Text>
              <Item regular>
                <Input 
                style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="NOM Maraude" />
              </Item>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Date :</Text>
              <Item regular>
                <Input style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="JJ/MM/AA" />
              </Item>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Heure de début :</Text>
              <Item regular>
                <Input style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="hh:mm" />
              </Item>
              <Text>Heure approximative</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Heure de fin :</Text>
              <Item regular>
                <Input style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="hh:mm" />
              </Item>
              <Text>Heure approximative</Text>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Lieu :</Text>
              <Item regular>
                <Input style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="Ville" />
              </Item>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Code postal :</Text>
              <Item regular last>
                <Input style={{ fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} 
                placeholder="Code Postal pour afficher la localisation sur la Carte" />
              </Item>
            </Form>
          </Content>  */}

        <Content>
          <Text>Test</Text>
          </Content>
      </View> 
    )
  }
}

const style = {
  input: {
    borderColor: '#FDC500', borderWidth: 2
  }
}
//FDC5002