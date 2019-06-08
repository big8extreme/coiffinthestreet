import React, {Component} from 'react';
import {StyleSheet, View, Button, Picker, Alert} from 'react-native';

export default class RequestPicker extends Component {
    constructor (props) {
        super (props);
        this.state= {request_type : ''
        } 
    }
    getSelectedPickerValue= ()=> {
        Alert.alert ("Vous avez sélectionné une requête de type " + this.state.request_type)
    }
    render() {
        return (
            <View style={styles.container}>
                <Picker 
                    selectedValue={this.state.request_type}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({request_type: itemValue})}
                    >
        
                    <Picker.Item style={styles.pickerItem} label='Problème technique' value = 'technique'/>
                    <Picker.Item style={styles.pickerItem} label='Problème avec un participant' value = 'personnel' />
                    <Picker.Item style={styles.pickerItem} label='Autre' value = 'autre' /> 
                </Picker>
                <Button style={styles.buttonValideChoice} title='Nature de la requête' onPress={this.getSelectedPickerValue}/>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    picker: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        width: 300,
        height: 200,
        borderRadius: 10,
        padding: 10,
    },
    pickerItem: {
        fontFamily: 'Georgia',
    },
    buttonValideChoice: {
        fontFamily: 'Georgia',
    }

})
