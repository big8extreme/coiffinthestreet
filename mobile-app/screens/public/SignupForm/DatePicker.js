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
            <View>
                <Text style={style.birthText}>Date de naissance *</Text>
                <View style={style.datePicker}>
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


        borderColor: '#FDC500',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18






    },
    dateText: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 10
    },
    birthText: {
        fontFamily: 'Roboto',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 25,
        fontWeight: 'bold'
    }
}
