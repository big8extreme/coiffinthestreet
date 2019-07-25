import React, { Component } from 'react'
import { Content, Form, Item, Input } from 'native-base';
import { ScrollView, Text, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import DatePicker from '../../../../components/DatePicker'
import TimePicker from '../../../../components/TimePicker'
import { createMaraude } from '../../../../store/actions/maraude'
import CitySearcher from './CitySearch';
import GlobalFooter from '../../../../components/GlobalFooter';
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
        <View style={{alignSelf: 'center', backgroundColor: '#2D2D2D', width: '100%'}}>
          <Text style={{
            color: 'white',
            alignSelf: 'center', 
            fontFamily: "Sedgwick",
            marginBottom: 10,
            marginTop: 25,
            fontWeight: 'bold',
            fontSize: 40}}>
              Créer une maraude
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" enabled >
        <ScrollView style={{backgroundColor: '#2D2D2D'}}>
            <Form style={{ alignSelf: 'center', width: '90%' }}>
            <Text style={style.inputText}>
              Titre</Text>
            <Item regular style={{
              borderColor: this.state.errors.includes('title') ? 'red' : '#FDC500',
              height: 60,
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 1,
            }}>
              <Input
                value={this.state.title}
                onChangeText={(value) => this.handleTextChange({ name: 'title', value })}
              />
            </Item>
            <Text style={style.inputText}>
              Description</Text>
            <Item regular style={{
              borderColor: this.state.errors.includes('description') ? 'red' : '#FDC500',
              height: 60,
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 1,
            }}>
              <Input
                value={this.state.description}
                onChangeText={(value) => this.handleTextChange({ name: 'description', value })}
              />
            </Item>
            <Text style={style.inputText}>
              Date</Text>
              <DatePicker
              onChange={(value) => this.handleTextChange({ name: 'startDate', value })}
            />
            <Text style={style.inputText}>Heure de début</Text>
            <TimePicker
              onChange={(value) => this.handleTextChange({ name: 'startAt', value })}
            />
            <Text style={style.inputText}>Heure de fin</Text>
            <TimePicker
              onChange={(value) => this.handleTextChange({ name: 'endAt', value })}
            />
            <Text style={style.inputText}>
              Lieu</Text>
              <CitySearcher
                handleCityChange={(value) => this.handleTextChange({ name: 'city', value })}
                handlePositionSelect={this.handlePositionSelect}
                city={this.state.city}
                errors={this.state.errors}
              />
              <View style={{marginBottom: 200, marginTop: -20}}>
              <CustomButton
                label="Valider"
                fontSize={25}
                colorfill="#FDC500"
                onPressFunc={this.submitForm} />
              </View>
            </Form>
            </ScrollView>
          </KeyboardAvoidingView>
        <GlobalFooter/>
      </Root>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state
})

const style = StyleSheet.create({
  inputTitle: {
    // marginBottom: 5,
    alignSelf: 'center', 
    fontFamily: "Sedgwick",
    marginBottom: 10,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 35
  },
  inputText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    marginTop: 25,
    fontFamily: 'Tinos_bold',
    alignSelf: 'flex-start', 


  },
  maraudeText: {
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold'
  },
  
})

const mapDispatchToProps = {
  createMaraude
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
