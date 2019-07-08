import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimePickerVisible: false
    };
  }

  showPicker = () => {
    this.setState({ isTimePickerVisible: true });
  };

  hidePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handlePicker = time => {
    console.log("A date has been picked: ", time);
    this.setState({
        isTimePickerVisible: false,
        chosenTime: moment(time).format('hh:mm')
    })
    this.props.onChange(time)
  };

  render() {
    return (
      <View>
                <View style={{...style.timePicker, ...this.props.style}}>
                    <TouchableOpacity onPress={this.showPicker}>
                        <Text style={style.timeText}>{this.state.chosenTime}</Text>
                    </TouchableOpacity>
                    
                </View>
      
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'time'}
          is24Hour={true}
          />
          </View>
    );
  }
}

const style = {
    timePicker: {
        width: 300,
        height: 60,
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 10
    },
    timeText: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10
    }
}