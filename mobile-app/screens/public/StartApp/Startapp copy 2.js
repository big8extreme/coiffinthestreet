mport React, { Component } from 'react'
import { StyleSheet, View, Image , TouchableOpacity} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import LoginForm from '../LoginForm';


export default class Startapp extends Component {

    submitForm() {

    }




    render() {
        const { navigate } = this.props.navigation;
        return (


            <View style={styles.backgroundApp}>
                <View style={styles.flexCenterImg}>
                    <Image
                        source={require('./../LoginForm/Logo_light.png')}
                    />
                </View>




                <View style={styles.flexCenterImg}>
                <CustomButton style="startappbleu" label="JE CONNAIS DEJA" navigation={LoginForm} screen="LoginForm" onPressFunc={this.submitForm.bind(this)} />

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

        )
    }
};

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#2D2D2D', flex: 1,
    },

    flexCenterImg: {
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 30
    },
 
});
