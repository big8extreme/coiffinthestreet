

import React from 'react'
import { Image,  Text, View } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { Card, CardItem, Left, Body } from 'native-base';
import moment from "moment";





export default function PhotoMaraude({ photo, title, startdAt, description, city, index }) {
    
    return (
        <View>

            <Card style={style.card}>
                <CardItem style={style.cardItem}>
                    <Body>
                        <Left />
                        <Image source={{ uri: `${photo.url}` }}
                            style={style.image} />
                    </Body>
                </CardItem>
                <CardItem style={style.cardItem}>
                    <Body>
                        <Left />
                        <Text style={style.title}>{title}</Text>
                        <Text>{`${city}${moment(maraude.startAt).format(" DD/ MM/ YYYY")}`}</Text>
                        <Text style={style.description}>{description}</Text>
                    </Body>
                </CardItem>
            </Card>
        </View>
    )
}


const style = {
    maraudeTitle: {
        fontSize: 23,
    },
    description: {
        fontSize: 23,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23
    },
    image: {
        width: 300,
        height: 300,
    },
    card: {
        marginBottom: 30,
        borderRadius: 0, 
        width:320, 
        justifyContent:'center' ,
        alignItems:'center'   
    },
    cardItem: {
        display: 'flex',
        width:320
    }
}

