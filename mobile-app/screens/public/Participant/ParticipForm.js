import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import { Input, Picker, Form, Item } from 'native-base';
import { connect } from 'react-redux';
import { createParticipant } from '../../../store/actions/participant';
import CustomButton from '../../../components/CustomButton'
import { Toast, Root } from 'native-base';

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
      <Root>
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView>
            <Form
              style={{ marginTop: 30, justifyContent: 'center' }}
            >
              <Text style={styles.title}>Inscription en tant que participant</Text>
              <Text style={styles.text}>Nom *</Text>
              <Item regular style={{ borderColor: 'white' }}>
                <Input
                  value={this.state.participant.lastName}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, lastName: value } })
                    this.resetError('lastName')
                  }}
                  style={this.state.errors.includes("lastName") ? styles.erronedField : styles.field}
                  placeholder="Nom du participant"
                />
              </Item>
              <Text style={styles.text}>Prénom *</Text>
              <Item regular style={{ borderColor: 'white' }}>
                <Input
                  value={this.state.participant.firstName}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, firstName: value } })
                    this.resetError('firstName')
                  }}
                  style={this.state.errors.includes("firstName") ? styles.erronedField : styles.field}
                  placeholder="Prénom du participant"
                />
              </Item>

              <Text style={styles.text}>E-mail *</Text>
              <Item regular style={{ borderColor: 'white' }}>
                <Input
                  value={this.state.participant.email}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, email: value } })
                    this.resetError('email')
                  }}
                  style={this.state.errors.includes("email") ? styles.erronedField : styles.field}
                  placeholder="Adresse mail du participant"
                />
              </Item>
              <Text style={styles.text}>Profession *</Text>
              <Item regular style={{ borderColor: 'white' }}>
                <Picker
                  selectedValue={this.state.participant.job}
                  style={{ ...styles.field, width: '98%' }}
                  mode="dropdown"
                  placeholder="Votre profession"
                  placeholderStyle={{ paddingLeft: 10, color: '#666666', fontFamily: 'Tinos', fontSize: 18, }}
                  textStyle={{ color: 'black', paddingLeft: 10, fontSize: 18, fontFamily: 'Tinos', fontWeight: 'bold' }}
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
              <Text style={styles.text}>Ville*</Text>
              <Item regular style={{ borderColor: 'white' }}>
                <Input
                  value={this.state.participant.city}
                  onChangeText={(value) => {
                    this.setState({ ...this.state, participant: { ...this.state.participant, city: value } })
                    this.resetError('city')
                  }}
                  style={this.state.errors.includes("city") ? styles.erronedField : styles.field}
                  placeholder="Ville du participant"
                />
              </Item>
            </Form>
            <CustomButton
              label="Valider"
              fontSize={25}
              colorfill="#FDC500"
              onPressFunc={this.submitForm} />
          </ScrollView>
        </KeyboardAvoidingView>
      </Root >
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  field: {
    borderColor: '#FDC500',
    height: 60,
    borderWidth: 2,
    width: '90%',
    borderRadius: 10,
    padding: 5,
    fontSize: 18,
    marginLeft: 11,
    marginRight: 11
  },
  erronedField: {
    borderColor: 'red',
    height: 60,
    borderWidth: 2,
    width: '90%',
    borderRadius: 10,
    padding: 5,
    fontSize: 18,
    marginLeft: 11,
    marginRight: 11
  },
  text: {
    fontFamily: 'Tinos',
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 11,
    marginTop: 25
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 110
  },
  flatListContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#FDC500',
    borderRadius: 10,
    width: '70%',
    marginLeft: 11,
  },
  item: {
    padding: 8,
    fontSize: 15
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
