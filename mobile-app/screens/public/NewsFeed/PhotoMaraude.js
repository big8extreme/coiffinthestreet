

import React from 'react'
import { Image, Text, View } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { Card, CardItem, Left, Body } from 'native-base';
import moment from "moment";





export default function PhotoMaraude({ photo, title, startAt, description, city, index }) {

    return (
        <View>
            <Card style={style.card}>
                <CardItem>
                    <Body style={style.body}>
                        <Left />
                        <Text style={style.title}>{title}</Text>
                        <Text style={style.city}>{`${city}${moment(maraude.startAt).format(" DD/ MM/ YYYY")}`}</Text>
                    </Body>
                </CardItem>
                <CardItem >
                    <Body>
                        <Left />
                        <Image source={{ uri: `${photo.url}` }}
                            style={style.image} />
                    </Body>
                </CardItem>
                <CardItem >
                    <Body style={{paddingStart:0}}>
                        
                        <Text style={style.description}>{description}</Text>
                    </Body>
                </CardItem>
            </Card>
        </View>
    )
}

const style = {

    description: {
        fontSize: 21,
        fontFamily: 'Tinos',
        marginLeft:-10,
        marginTop:-10
    },
    title: {
        fontFamily: 'Tinos_bold',
        fontSize: 23,
        textAlign: 'left',
        marginLeft:-10
    },
    image: {
        width: 315,
        height: 240,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
    },
    card: {
        marginBottom: 30,
        borderRadius: 0,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 0,
        shadowOffset: {
            width: 0,
            height: 7
        },
        shadowRadius: 5,
        shadowOpacity: 0.7
    },
    cardItem: {
        display: 'flex',
        width: 350
    },
    body: {
        height: 60,
        justifyContent: 'flex-start',
        paddingBottom: 30,

    },
    city: {
        fontFamily: 'Tinos',
        fontSize: 19,
        marginLeft:-10
    }
}


