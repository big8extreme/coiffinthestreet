import React from 'react'
import { Image, Dimensions } from 'react-native';
import {  CardItem, Body } from 'native-base';

let deviceWidth = Dimensions.get('window').width

  

export default function PhotoMaraude({ photo }) {
    
    return (
        
        <CardItem style={{paddingLeft:0, paddingRight:0, paddingTop:0, paddingBottom:0}}>
            <Body style={{width: deviceWidth, }}>
           
                <Image source={{ uri: `${photo.url}` }} style={{width:deviceWidth, height:260 }}/>
                
            </Body>
        </CardItem>
        
    )
}



