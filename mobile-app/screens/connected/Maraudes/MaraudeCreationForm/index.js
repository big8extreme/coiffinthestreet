import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Content, Form, Item, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import { fetchMaraudes, fetchMaraude, createMaraude, updateMaraude, deleteMaraude } from '../../../../store/actions/maraudes'

export class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 5,
      title: 'Maraude no 10',
      startAt: "2019-06-03T16:10:07.000Z",
      endAt: "2019-06-04T16:10:07.000Z",
      description: "Vero dolorem totam consequatur test",
      city: 'Marseille',
      isPublished: false,
      longitude: "5.367508",
      latitude: "43.240201"
    }
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
            <Item regular style={{ borderColor: 'transparent' }}>
              <Input
                style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="NOM Maraude" />
            </Item>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Date :</Text>
            <Item regular style={{ borderColor: 'transparent' }}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="JJ/MM/AA" />
            </Item>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Heure de début :</Text>
            <Item regular style={{ borderColor: 'transparent' }}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="hh:mm" />
            </Item>
            <Text style={{ fontSize: 10, marginBottom: 15 }}>Heure approximative</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Heure de fin :</Text>
            <Item regular style={{ borderColor: 'transparent' }}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="hh:mm" />
            </Item>
            <Text style={{ fontSize: 10, marginBottom: 15 }}>Heure approximative</Text>
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Lieu :</Text>
            <Item regular style={{ borderColor: 'transparent' }}>
              <Input style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }}
                placeholder="Ville" />
            </Item>

            {
              //This Button serves to test the connection between frontend and api
              //It must be replace before production
            }
            <Button
              onPress={() => this.props.updateMaraude(this.state)}
            ><Text>Créer la maraude</Text></Button>

          </Form>
        </Content>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  //fetchMaraudes
  //fetchMaraude
  //createMaraude
  updateMaraude
  //deleteMaraude
}

export default connect(mapStateToProps, mapDispatchToProps)(index)

/*
Temporary code, will be delete before production
const style = {
  input: {
    borderColor: '#FDC500', borderWidth: 2
  }
}
*/