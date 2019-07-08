import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Content, Form, Item, Input, Button } from 'native-base';  
import { connect } from 'react-redux'
import DatePicker from '../../../../components/DatePicker'
import TimePicker from '../../../../components/TimePicker'
import { createMaraude } from '../../../../store/actions/maraude'

const defaultMaraude = {
  title: '',
  startAt: '',
  endAt: '',
  startDate: '',
  description: '',
  city: '',
  isPublished: false,
  longitude: '5.389014',
  latitude: '43.29925',
  errors: []
}

const requiredFields = ['title', 'startAt', 'endAt', 'startDate', 'description', 'city']

export class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...defaultMaraude
    }
  }

submitForm = () => {
    let errors = [];
    requiredFields.forEach((field) => {
      if(this.state[field].length === 0){
        errors.push(field)
      }
    })
    this.setState({ errors: errors });
    if(errors.length === 0){
      this.props.createMaraude(this.state)
      this.setState({...defaultMaraude})
    }
}

handleTextChange = (event) => {
  this.setState({[event.name]: event.value})
  let {errors} = this.state;
  if(errors.includes(event.name)){
    const index = errors.indexOf(event.name)
    errors.splice(index, 1)
    this.setState({errors})
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
            <Item regular style={{ borderColor: this.state.errors.includes('title') ? 'red' : '#FDC500' }}>
              <Input
                name="title"
                value={this.state.title}
                onChangeText={(value) => this.handleTextChange({name: 'title', value})}
                placeholder="NOM Maraude" 
                />
            </Item>
            <Item regular style={{ borderColor: this.state.errors.includes('description') ? 'red' : '#FDC500' }}>
              <Input
                name="description"
                value={this.state.description}
                onChangeText={(value) => this.handleTextChange({name: 'description', value})}
                placeholder="Description" 
                />
            </Item>
            <DatePicker
              style={{ borderColor: this.state.errors.includes('startDate') ? 'red' : '#FDC500' }}
              onChange={(value) => this.handleTextChange({name: 'startDate', value})} 
            />
            <Text style={style.maraudeText}>Heure de début de la Maraude</Text>
            <TimePicker 
              style={{ borderColor: this.state.errors.includes('startAt') ? 'red' : '#FDC500' }}
              onChange={(value) => this.handleTextChange({name: 'startAt', value})} 
            />
            <Text style={style.maraudeText}>Heure de fin de la Maraude</Text>
            <TimePicker
              style={{ borderColor: this.state.errors.includes('endAt') ? 'red' : '#FDC500' }}
              onChange={(value) => this.handleTextChange({name: 'endAt', value})} 
            />
            <Text style={{ marginBottom: 15, fontWeight: 'bold', fontSize: 16 }}>
              Lieu :</Text>
            <Item regular style={{ borderColor: this.state.errors.includes('city') ? 'red' : '#FDC500' }}>
              <Input 
                name="city"
                value={this.state.city}
                onChangeText={(value) => this.handleTextChange({name: 'city', value})}
                placeholder="Ville" 
                style={{ borderRadius: 10, marginBottom: 15, fontSize: 12, borderColor: '#FDC500', borderWidth: 2 }} />
            </Item>

            {
              //TODO This Button serves to test the connection between frontend and api
              //It must be replace before production
            }
            <Button
              onPress={this.submitForm}
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

const style = {
  field: {
    borderColor: '#FDC500',
    height: 60,
    borderWidth: 1,
    width: '90%',
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 18
},
inputText: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 25
},
  maraudeText: {
      textAlign: 'left',
      marginLeft: 10,
      marginBottom: 5,
      marginTop: 25,
      fontWeight: 'bold'
  }
}

const mapDispatchToProps = {
  //fetchMaraudes
  //fetchMaraude
  //createMaraude
  createMaraude
  //deleteMaraude
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
