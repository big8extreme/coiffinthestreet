import React, { Component } from 'react'
import { StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

import { Text } from 'react-native';


class forgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
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
