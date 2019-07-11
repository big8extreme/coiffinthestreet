//export default class Startapp extends Component {
import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';

export default class Startapp extends React.Component {
  submitForm() {
  }
  render() {
    return (
      <View style={stylestar.backgroundApp}>
        <View>
          <ProgressiveImage
            thumbnailSource={require('../../../assets/FondStart.jpg')}
            source={require("../../../assets/FondStart.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>

        <View style={stylestar.firstbutton}>
          <CustomButton fontSize={18} colorfill='#06247D' fontColor='#FCFCFC' label="JE CONNAIS DEJA" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />
          <CustomButton fontSize={18} decalagetext={50} colorfill='#A03002' label="DECOUVRIR LE MOUVEMENT" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />
        </View>

      </View>
    );
  }
}


const stylestar = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundApp: {
    backgroundColor: '#2D2D2D',
    flex: 1,

  },

  firstbutton: {
    alignSelf: 'center',
    marginBottom: 20,
    position: "absolute",
    marginTop: 250,
    backgroundColor: 'transparent',
  },










});
