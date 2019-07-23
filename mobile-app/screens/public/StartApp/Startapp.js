//export default class Startapp extends Component {
import React from 'react';
import { connect } from 'react-redux'

import { StyleSheet, View, Dimensions, Image, Linking, TouchableOpacity, ImageBackground } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { withNavigation } from 'react-navigation';


const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

class Startapp extends React.Component {

  componentDidMount() {
    const { user } = this.props;
    if (user.isConnected) {
      this.props.navigation.navigate('DrawerMenu')
    }
  }


  render() {
    return (
      <View style={stylestar.backgroundApp}>
        <View>
          <ImageBackground
            source={require("../../../assets/FondStart.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>

        <View style={stylestar.firstbutton}>
          <CustomButton fontSize={22} colorfill='#06247D' label="JE CONNAIS DÉJÀ !" navigation={this.props.navigation} screen="Feed" />
          <CustomButton fontSize={22} turn="177" colorfill='#A03002' label="DÉCOUVRÌR LE MOUVEMENT́" navigation={this.props.navigation} screen="Discover" />
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

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = {

}
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Startapp))


const stylestar = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundApp: {
    backgroundColor: '#2D2D2D',
    flex: 1,
    height:'100%'
  },
  firstbutton: {
    alignSelf: 'center',
    marginBottom: 20,
    position: "absolute",
    marginTop: 200,
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


