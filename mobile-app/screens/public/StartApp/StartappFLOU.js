//export default class Startapp extends Component {
import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';



const w = Dimensions.get('window');


export default class Startapp extends React.Component {

  submitForm() {

  }

  render() {
    return (


      <View style={stylestar.backgroundApp}>
        <View style={stylestar.logoStyle}>
          <Image
            source={require('../../../assets/Logo_light.png')}
          />
        </View>
     
        <View>
        <ProgressiveImage
          // thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          thumbnailSource={require('../../../assets/FondStart.jpg') }
         // source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 10}&buster=${Math.random()}` }}
         source={require("../../../assets/FondStart.jpg") }
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />
         </View>

         <View style={stylestar.firstbutton}>
        <CustomButton  fontSize={18} colorfill='#06247D' fontColor='white' label="JE CONNAIS DEJA"  navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />

        <CustomButton  fontSize={18} decalagetext={50} colorfill='#A03002' label="DECOUVRIR LE MOUVEMENT" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />
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
  logoStyle: {
    alignSelf: 'center',
    marginBottom: 20,
     backgroundColor:'transparent',
     marginTop: 50
    },

    firstbutton: {
      alignSelf: 'center',
      marginBottom: 20,
      position: "absolute",
      marginTop: 250,
      backgroundColor:'transparent',
      },










});
