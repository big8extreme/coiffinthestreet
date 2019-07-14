//export default class Startapp extends Component {
import React from 'react';
import { StyleSheet, View, Dimensions, Image, Linking, TouchableOpacity } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';
import Discover from '../Discover/discover';


const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}
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
        <View style={stylestar.logoStyle}>
          <Image
            source={require('../../../assets/Logo_light.png')}
          />
        </View>

        <View style={stylestar.firstbutton}>
          <CustomButton fontSize={25} colorfill='#06247D' label="JE CONNAIS DEJA" navigation={Discover} screen="Discover" onPressFunc={this.submitForm.bind(this)} />
          <CustomButton fontSize={22} turn="177" colorfill='#A03002' label="DECOUVRIR LE MOUVEMENT" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />
        </View>

        <View style={stylestar.iconeline}>
          <Image
            source={require('../../../assets/iconeSplash.png')}
          />
        </View>

        <View style={stylestar.iconOne} >
          <TouchableOpacity onPress={() => { Linking.openURL('https://fr-fr.facebook.com/coiffinthestreet') }}>
            <Image
              source={require('../../../assets/social/Facebook.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={stylestar.iconTwo}>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/coiffinthestreet_/') }}>
          <Image
            source={require('../../../assets/social/instagram.png')}
          />
               </TouchableOpacity>
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
  },
  iconeline: {
    alignSelf: 'center',
    marginBottom: 20,
    position: "absolute",
    marginTop: 600,
 
  },
  logoStyle: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    marginTop: 20,
    position: "absolute",
  },
  iconOne: {
    backgroundColor: 'transparent',
    marginTop: 643,
    position: "absolute",
    paddingLeft: config.deviceWidth * 0.26,
    width: config.deviceWidth * 0.8,
    
  },
  iconTwo: {
    backgroundColor: 'transparent',
    marginTop: 665,
    position: "absolute",
    paddingLeft: config.deviceWidth * 0.61,
    width: config.deviceWidth * 0.8,
   
  },
});
