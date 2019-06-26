

import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { Container, Content, Card, CardItem, Button, Icon, Left, Body } from 'native-base';
import moment from "moment";




export default function PhotoMaraude({ photo, title, startdAt, description, city }) {
    return (

        //         <View>
        //             <Image
        //                 source={{ uri: `${photo.url}` }}
        //                 style={style.image}
        //             />
        //             <Text>{title}</Text>
        //         </View>
        //     )
        // }

        <View>
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text style={style.maraudeTitle}>{title}</Text>
                            <Text style={style.maraudeDate}>{`${city}${moment(maraude.startAt).format(", DD/ MM/ YYYY")}`}</Text>

                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>

                    <Image source={{ uri: `${photo.url}` }}
                        style={style.image} />
                        
                       
                    

                </CardItem>
                <CardItem>
                    <Left>
                        <Body>
                            <Text style={style.test}>{description}</Text>
                           

                        </Body>
                    </Left>
                </CardItem>

                

            </Card>









        </View>

    )
}

const style = {
    describeText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    maraudeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    maraudeDate: {
        marginLeft: 0
    },
    maraudeDescription: {
        marginLeft: 0
    },

    image: {
        width: 400,
        height: 300,
        // flex:1
    },
    test: {
        color: 'red',
        fontSize: 30

    }
}
