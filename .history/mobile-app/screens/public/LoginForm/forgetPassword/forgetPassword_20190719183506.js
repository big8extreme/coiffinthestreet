import React, { Component } from 'react'
import { StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { Container,  Content, Icon, Picker, Textarea, Toast, Root } from 'native-base';

import CustomButton from '../../../../components/CustomButton';


class forgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    callForgetPassword = async () => {
        if (this.state.message === '') {
            return Toast.show({
                text: "Veuillez tapper votre message.",
                position: 'top',
                type: 'danger',
                buttonText: 'Ok'
            })
        }
        // const response = await this.props.contactAdmin(this.state.email, this.state.password);
        // if (response.status === 'error') {
        //   Toast.show({
        //     text: "Erreur lors de l'envoi du formulaire. Veuillez réessayer.",
        //     position: 'top',
        //     type: 'danger',
        //     buttonText: 'Ok'
        //   })
        // } else if (response.status === 'success') {
        //   Toast.show({
        //     text: "Votre message a été envoyé.",
        //     position: 'top',
        //     type: 'success',
        //     buttonText: 'Ok'
        //   })
        //   setTimeout(() => {
        //     this.props.navigation.navigate('BottomTab')
        //   }, 500)
        // }
    }

    render() {
        return (
            <View style={styles.backgroundApp}>
                <View style={styles.flexCenterImg}>
                    <Image
                        // @ts-ignore
                        source={require('../Logo_light.png')}
                    />
                </View>
                <View style={styles.flexCenter}>
                    <Text style={styles.whiteTextLabel}>Email :</Text>
                    <View style={styles.greenBorder}>
                        <TextInput style={styles.textInput} onChangeText={(value) => this.setState({ email: value })} placeholder='Entrez votre email'></TextInput>
                    </View>
                </View>
                <CustomButton
                    label="Réinitialiser"
                    fontSize={25}
                    colorfill="#FDC500"
                    onPressFunc={() => this.callForgetPassword()} />
                <View style={styles.flexCenterImg}>
                    <TouchableOpacity>
                        <Image
                            // @ts-ignore
                            source={require('../BTN_Valide.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(forgetPassword)

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#4E4E4E', flex: 1,
        paddingTop: 200,
    },
    flexCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexCenterImg: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    whiteText: {
        color: 'white',
    },
    whiteTextLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
    },
    whiteTextTitle: {
        color: 'white',
        fontSize: 23,
        fontFamily: "Sedgwick",
    },
    textInput: {
        color: 'white',
        fontSize: 23,
    },
    greenBorder: {
        borderBottomColor: '#54B256',
        borderBottomWidth: 3,
        marginBottom: 30,
    },

});
