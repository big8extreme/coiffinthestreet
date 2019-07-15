import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CardsPhotosMaraude from './CardsPhotosMaraude';






export default class NewsFeed extends Component {
    render() {
        return (

            <LinearGradient
                colors={['#131517', '#2D2D2D', '#454545']}
                style={style.background}
            >
                <ScrollView >
                    <View style={style.logo}>
                        <Image source={require('../../../assets/Logo_light.png')}/>
                    </View>
                    <Text style={style.text}>Retrouvez-nous avec #coiffinthestreet !</Text>
                    <CardsPhotosMaraude />


                </ScrollView>

            </LinearGradient>


        );
    }
}

const style = {
    text: {
        color: 'white',
        fontFamily: 'TinosItalic',
        marginTop: 30,
        marginBottom:30,
        textAlign: 'center',
        fontSize:17
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}


