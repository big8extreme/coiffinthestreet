import React, { Component } from 'react'
import { StyleSheet, Image, View, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { Text, Toast, Root } from 'native-base';

import CustomButton from '../../../../components/CustomButton';
import { reset } from '../../../../store/actions/auth';

class forgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    callForgetPassword = async () => {
        if (this.state.email === '') {
            return Toast.show({
                text: "Veuillez entrer votre adresse email.",
                type: 'danger',
                buttonText: 'Ok'
            })
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === false) {
            return Toast.show({
                text: "Veuillez entrer une adresse email valide.",
                type: 'danger',
                buttonText: 'Ok'
            })
        }
        const response = await this.props.reset(this.state.email);

        if (response.status === 'error') {
            Toast.show({
                text: "Aucun compte ne correspond à cette adresse email.",
                // text: "Erreur lors de la réinitialisation de votre mot de passe, veuillez contacter un administrateur.",
                // text: response.error.response.data.message,
                type: 'danger',
                buttonText: 'Ok'
            })
        } else if (response.status === 'success') {
            Toast.show({
                text: "Votre nouveau mot de passe vous a été envoyé par email.",
                position: 'top',
                type: 'success',
                buttonText: 'Ok'
            })
            setTimeout(() => {
                this.props.navigation.navigate('BottomTab')
            }, 500)
        }
    }

    render() {
        return (
            <Root>
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
                    {/* TODO update btn color with green on BTN_valide.png
                <View style={styles.flexCenterImg}>
                    <TouchableOpacity>
                        <Image
                            // @ts-ignore
                            source={require('../BTN_Valide.png')}
                        />
                    </TouchableOpacity>
                </View> */}
                </View>
            </Root>
        )
    }
};
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(forgetPassword)

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#2D2D2D', flex: 1,
    },
    flexCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexCenterImg: {
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 30,
        paddingBottom: 100,
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
        borderBottomColor: '#FDC500',
        borderBottomWidth: 3,
        marginBottom: 30,
    },

});
