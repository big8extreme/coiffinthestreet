import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import { LinearGradient } from 'expo';
import SliderMauraude from './SliderMauraude';
import CardsPhotosMaraude from './CardsPhotosMaraude';





export default class NewsFeed extends Component {
    render() {
        return (

            <LinearGradient
                colors={['#131517', '#2D2D2D', '#454545']}
                style={style.background}
            >
                <ScrollView >

                    <Image source={require('../../../assets/Logo_light.png')} style={style.logo} />
                    <Text style={style.text}>Retrouvez-nous avec #coiffinthestreet !</Text>
                    <CardsPhotosMaraude/>
                    

                </ScrollView>

            </LinearGradient>


        );
    }
}

const style = {
    text: {
        color: 'white',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        marginTop: 20,
        textAlign:'center'
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        flex:1
    },
    logo: {
        marginLeft: 15
    }
}


