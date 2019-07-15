import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Content, Form, Item, Input } from 'native-base';
import { connect } from 'react-redux'
import DatePicker from '../../../../components/DatePicker'
import TimePicker from '../../../../components/TimePicker'
import { createMaraude } from '../../../../store/actions/maraude'
import ValidateButton from '../../../../components/ValidateButton'
import CitySearcher from './CitySearch';

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
      if (this.state[field].length === 0) {
        errors.push(field)
      }
    })
    this.setState({ errors: errors });
    if (errors.length === 0) {
      this.props.createMaraude(this.state)
      this.setState({ ...defaultMaraude })
    }
  }

  handleTextChange = (event) => {
    this.setState({ [event.name]: event.value })
    let { errors } = this.state;
    if (errors.includes(event.name)) {
      const index = errors.indexOf(event.name)
      errors.splice(index, 1)
      this.setState({ errors })
    }
  }

  render() {
    return (
      <ScrollView>
        <Content style={style.content}>
          <Form>
            <Text style={style.inputTitle}>
              Créer une Maraude </Text>
            <Text style={style.inputText}>
              Titre de la maraude : </Text>
            <Item regular
              style={{
                borderColor: this.state.errors.includes('title') ? 'red' : '#FDC500',
                width: 300,
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                
              }}>
              <Input
                value={this.state.title}
                onChangeText={(value) => this.handleTextChange({ name: 'title', value })}
              />
            </Item>
            <Text style={style.inputText}>
              Description de la maraude : </Text>
            <Item regular style={{
              borderColor: this.state.errors.includes('description') ? 'red' : '#FDC500',
              width: 300,
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              
            }}>
              <Input
                value={this.state.description}
                onChangeText={(value) => this.handleTextChange({ name: 'description', value })}
              />
            </Item>
            <DatePicker
              style={{
                borderColor: this.state.errors.includes('startDate') ? 'red' : '#FDC500',
                width: 300,
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                
              }}
              onChange={(value) => this.handleTextChange({ name: 'startDate', value })}
            />
            <Text style={style.maraudeText}>Heure de début de la Maraude</Text>
            <TimePicker
              style={{
                borderColor: this.state.errors.includes('startAt') ? 'red' : '#FDC500',
                width: 300,
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                
              }}
              onChange={(value) => this.handleTextChange({ name: 'startAt', value })}
            />
            <Text style={style.maraudeText}>Heure de fin de la Maraude</Text>
            <TimePicker
              style={{
                borderColor: this.state.errors.includes('endAt') ? 'red' : '#FDC500',
                width: 300,
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                
              }}
              onChange={(value) => this.handleTextChange({ name: 'endAt', value })}
            />
            <CitySearcher
              onChangeText={this.handleTextChange}
              value={this.state.city}
              errors={this.state.errors}
            />

            {
              //TODO This Button serves to test the connection between frontend and api
              //It must be replace before production
            }

            <ValidateButton onPress={this.submitForm} label="Créer la Maraude" style={style.customButton} />

          </Form>
        </Content>
      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state
})

const style = StyleSheet.create({
  inputTitle: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 30
  },
  inputText: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold'
  },
  maraudeText: {
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold'
  },
  content: {
    marginTop: 50
  }
})

const mapDispatchToProps = {
  createMaraude
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
