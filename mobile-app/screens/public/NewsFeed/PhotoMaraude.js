

import React from 'react'
import { Image, Text, View } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { Header, Card, CardItem, Thumbnail, Left, Body, Icon, Button } from 'native-base';
import moment from "moment";





export default function PhotoMaraude({ photo, title, createdAt, description, city, index }) {

    return (
        <View>

            <Card style={style.card}>
                <CardItem>
                    <Body style={style.body}>
                        <Left />
                        <Text style={style.title}>{title}</Text>
                        <Text style={style.city}>{`${city}${moment(maraude.createdAt).format(" DD/ MM/ YYYY")}`}</Text>
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

            {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                    <Text>Swipe Left</Text>
                </Button>
                <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                    <Icon name="arrow-forward" 
                    style={{color:'red'}}/>
                    <Text>Swipe Right</Text>
                </Button>
            </View>
            <Icon name="arrow-back" /> */}
        </View>
    )
}

// const style = {
//     thumbnail: {
//         width: 80,
//         height: 80,
//         borderColor: 'black',
//         borderWidth: 1
//     },
//     image: {
//         height: 300,
//         width: 300,
//         alignSelf: 'center'
//     }
// }


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


