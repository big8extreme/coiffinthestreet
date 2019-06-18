import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import { LinearGradient } from 'expo';
import SliderMauraude from './SliderMauraude';





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
                    <SliderMauraude/>
                    <SliderMauraude/>
                    <SliderMauraude/>
                    <SliderMauraude/>

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
        marginTop: 20
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    logo: {
        marginLeft: 15
    }
}


