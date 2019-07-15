import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      chosenDate: '',
    }
  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('DD/ MM/ YYYY')
    })
    this.props.onChange(datetime)
  }
  hidePicker = () => {
    this.setState({
      isVisible: false,
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  render() {
    return (
      <View style={{flex: 1, alignSelf: 'left'}}>
        <Text style={style.birthText}>Date de la Maraude</Text>
        <View style={{...style.datePicker, ...this.props.style}}>
          <TouchableOpacity onPress={this.showPicker}>
            <Text style={style.dateText}>{this.state.chosenDate}</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
        />
      </View>
    )
  }
}

const style = {
  datePicker: {
    flex: 1,
    borderColor: '#FDC500',
    height: 60,
    borderRadius: 5,
    borderWidth: 1
  },
  dateText: {
    fontSize: 18,
    marginTop: 15,
  },
  birthText: {
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold'
  }
}