import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Form, Item, Input } from 'native-base';
import { connect } from 'react-redux'
import DatePicker from '../../../../components/DatePicker'
import TimePicker from '../../../../components/TimePicker'
import { createMaraude } from '../../../../store/actions/maraude'
import CitySearcher from './CitySearch';
import { Toast, Root } from 'native-base';
import CustomButton from '../../../../components/CustomButton';

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

  submitForm = async () => {
    let { errors } = this.state;
    requiredFields.forEach((field) => {
      if (this.state[field] && this.state[field].length === 0) {
        errors.push(field)
      }
    })

    this.setState({ errors: [...errors] });
    if (errors && errors.length === 0) {
      const response = await this.props.createMaraude(this.state)
      if (response.status === 'success') {
        this.props.navigation.navigate('BottomTab');
      } else {
        Toast.show({
          text: 'Erreur lors de la création de maraude',
          position: 'top',
          type: 'danger',
        })
      }
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
  handlePositionSelect = (position) => {
    this.setState({
      longitude: position.lon,
      latitude: position.lat,
      city: position.display_name
    })
  }

  render() {
    return (
      <Root>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Form style={{ alignItems: 'center' }}>
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
                  marginLeft: 10
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
                marginLeft: 10
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
                  marginLeft: 10
                }}
                onChange={(value) => this.handleTextChange({ name: 'startDate', value })}
              />
              <Text style={style.inputText}>Heure de début de la Maraude</Text>
              <TimePicker
                style={{
                  borderColor: this.state.errors.includes('startAt') ? 'red' : '#FDC500',
                  width: 300,
                  height: 60,
                  borderRadius: 5,
                  borderWidth: 1,
                  marginLeft: 10
                }}
                onChange={(value) => this.handleTextChange({ name: 'startAt', value })}
              />
              <Text style={style.inputText}>Heure de fin de la Maraude</Text>
              <TimePicker
                style={{
                  borderColor: this.state.errors.includes('endAt') ? 'red' : '#FDC500',
                  width: 300,
                  height: 60,
                  borderRadius: 5,
                  borderWidth: 1,
                  marginLeft: 10
                }}
                onChange={(value) => this.handleTextChange({ name: 'endAt', value })}
              />
              <CitySearcher
                handleCityChange={(value) => this.handleTextChange({ name: 'city', value })}
                handlePositionSelect={this.handlePositionSelect}
                city={this.state.city}
                errors={this.state.errors}
              />
              <CustomButton
                label="Créer la Maraude"
                fontSize={25}
                colorfill="#FDC500"
                onPressFunc={this.submitForm} />
            </Form>
          </KeyboardAvoidingView>
        </ScrollView>
      </Root>
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
