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
            <Text style={style.inputText}>
              Créer une Maraude </Text>
            <Text style={style.inputText}>
              Titre de la maraude : </Text>
            <Item regular style={style.customBorder}>
              <Input
                value={this.state.title}
                onChangeText={(value) => this.handleTextChange({ name: 'title', value })}
                placeholder="NOM Maraude"
              />
            </Item>
            <Text style={style.inputText}>
              Description de la maraude : </Text>
            <Item regular style={style.customBorder}>
              <Input
                value={this.state.description}
                onChangeText={(value) => this.handleTextChange({ name: 'description', value })}
                placeholder="Description"
              />
            </Item>
            <DatePicker
              style={style.customBorder}
              onChange={(value) => this.handleTextChange({ name: 'startDate', value })}
            />
            <Text style={style.maraudeText}>Heure de début de la Maraude</Text>
            <TimePicker
              style={style.customBorder}
              onChange={(value) => this.handleTextChange({ name: 'startAt', value })}
            />
            <Text style={style.maraudeText}>Heure de fin de la Maraude</Text>
            <TimePicker
              style={style.customBorder}
              onChange={(value) => this.handleTextChange({ name: 'endAt', value })}
            />
            <Text style={style.inputText}>
              Lieu :</Text>
            <Item regular style={style.customBorder}>
              <Input
                value={this.state.city}
                onChangeText={(value) => this.handleTextChange({ name: 'city', value })}
                placeholder="Ville" />
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
  inputText: {
    fontFamily: 'roboto',
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
  },
  content: {
    marginTop: 50
  },
  customBorder: { 
    width: 300,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 10, 
    borderColor: this.state.errors.includes('description') ? 'red' : '#FDC500' 
  }
}

const mapDispatchToProps = {
  createMaraude
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
