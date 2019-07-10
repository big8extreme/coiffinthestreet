//export default class Startapp extends Component {
import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ProgressiveImage from './ProgressiveImage';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Startapp extends React.Component {


  submitForm() {

  }

  render() {
    return (


      <View style={styles.backgroundApp}>
      <View style={styles.flexCenterImg}>
          <Image
              source={require('../../../assets/Logo_light.png')}
          />
      </View>




      
        <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />

<View style={styles.flexCenterImg}>

              <CustomButton label="DECOUVRIR LE MOUVEMENT" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />

                </View>


<View style={styles.flexCenterImg}>
                    <TouchableOpacity>
                        <Image
                           source={require('./../LoginForm/BTN_Valide.png')}
                        />
                    </TouchableOpacity>
                </View>




      </View>
    );
  }
}


const style = {
  backgroundApp: {
    backgroundColor: '#2D2D2D', flex: 1,
    
  },

  flexCenterImg: {
    alignSelf: 'center',
    marginBottom: 0,
    
  },


  
}