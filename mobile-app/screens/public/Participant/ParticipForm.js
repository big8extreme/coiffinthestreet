import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Alert, ScrollView, View } from 'react-native';
import { Input, Picker, Form, Item } from 'native-base';
import { connect } from 'react-redux';
import { createParticipant } from '../../../store/actions/participant';
import CustomButton from '../../../components/CustomButton'

const requiredFields = ['email', 'city', 'lastName', 'firstName', 'job']

const jobs = [
  { item: 'Coiffeur' },
  { item: 'Photographe' },
  { item: 'Esthéticien(ne)' }
]

const defaultParticipant = {
  maraudeId: null,
  isValidate: false,
  email: '',
  city: '',
  lastName: '',
  firstName: '',
  job: 'Coiffeur'
};

export class ParticipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: {
        ...defaultParticipant,
      },
      errors: [],
    }
  }
  _keyExtractor = (item, index) => item.key;
  componentDidMount() {
    if (this.props.auth.user.isConnected) {
      this.setState({ ...this.state, participant: { ...this.state.participant, ...this.props.auth.user } })
    }
  }
  submitForm = () => {
    let errors = [];
    requiredFields.forEach((field) => {
      if (this.state.participant[field].length < 1) {
        errors.push(field)
      }
    })
    this.setState({ errors: [...errors] });
    let { participant } = this.state;
    participant.maraudeId = this.props.maraudeId
    if (errors.length < 1) {
      this.props.createParticipant(participant)
      this.setState({ participant: { ...this.state.participant, ...defaultParticipant } })
      this.props.navigation.navigate('Map')
    }
  }
  resetError(field) {
    let { errors } = this.state;
    if (errors.includes(field)) {
      const index = errors.indexOf(field)
      errors.splice(index, 1)
      this.setState({ errors })
    }
  }
  GetItem(item) {
    this.setState({ ...this.state, participant: { ...this.state.participant, job: item } })
    this.resetError('job')
    Alert.alert("Vous avez sélectionné la profession " + `"${item}"`);
  }
  render() {
    return (
      <View>
        <View style={{alignSelf: 'center', backgroundColor: '#2D2D2D', width: '100%'}}>
          <Text style={{
            color: 'white',
            alignSelf: 'center', 
            fontFamily: "Sedgwick",
            marginBottom: 10,
            marginTop: 25,
            fontWeight: 'bold',
            fontSize: 40}}>
              Participation
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView style={{backgroundColor: '#2D2D2D'}}>
            <Form
              style={{ alignSelf: 'center', width: '90%'}}>
              <Text style={styles.inputText}>Nom</Text>
              <Item regular style={{
              borderColor: this.state.errors.includes('lastName') ? 'red' : '#FDC500',
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white'
            }}>
                <Input
                  value={this.state.participant.lastName}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, lastName: value } })
                    this.resetError('lastName')
                  }}
                />
              </Item>
              <Text style={styles.inputText}>Prénom</Text>
              <Item regular style={{
              borderColor: this.state.errors.includes('firstName') ? 'red' : '#FDC500',
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white'
            }}>
                <Input
                  value={this.state.participant.firstName}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, firstName: value } })
                    this.resetError('firstName')
                  }}
                />
              </Item>
              <Text style={styles.inputText}>E-mail</Text>
              <Item regular style={{
              borderColor: this.state.errors.includes('email') ? 'red' : '#FDC500',
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white'
            }}>
                <Input
                  value={this.state.participant.email}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, email: value } })
                    this.resetError('email')
                  }}
                />
              </Item>
              <Text style={styles.inputText}>Profession</Text>
              <Item regular style={{
              borderColor: this.state.errors.includes('job') ? 'red' : '#FDC500',
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white',
            }}>
                <Picker
                  selectedValue={this.state.participant.job}
                  mode="dropdown"
                  onValueChange={(itemValue, itemIndex) => {
                    return (
                      this.setState({
                        ...this.state,
                        participant: {
                          ...this.state.participant,
                          job: itemValue
                        }
                      })
                    )
                  }}>
                  {
                    jobs.map((job, idx) => {
                      return <Picker.Item key={`job-${idx}`} label={job.item} value={job.item} />
                    })
                  }
                </Picker>
              </Item>
              <Text style={styles.inputText}>Ville</Text>
              <Item regular style={{
              borderColor: this.state.errors.includes('city') ? 'red' : '#FDC500',
              height: 60,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: 'white'
            }}>
                <Input
                  value={this.state.participant.city}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, city: value } })
                    this.resetError('city')
                  }}
                  placeholder="Ville"
                  placeholderTextColor='black'
                />
              </Item>
              <View style={{marginBottom: 280, marginTop: 20}}>
                <CustomButton
                  label="Valider"
                  fontSize={25}
                  colorfill="#FDC500"
                  onPressFunc={this.submitForm} />
              </View>
            </Form>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    marginTop: 25,
    fontFamily: 'Tinos_bold',
    alignSelf: 'flex-start'
  }
});
const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = {
  createParticipant
}

// // @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ParticipForm)
