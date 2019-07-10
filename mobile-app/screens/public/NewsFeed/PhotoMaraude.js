import React from 'react'
import { Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { Card, CardItem, Left, Body } from 'native-base';
import moment from "moment";

let deviceWidth = Dimensions.get('window').width


export default function PhotoMaraude({ photo, title, startAt, description, city, index }) {

  return (
    <CardItem >
      <Body>
        <Left />
        <Image source={{ uri: `${photo.url}` }} style={style.image} />
      </Body>
    </CardItem>
  )
}

const style = StyleSheet.create({
  image: {
    width: deviceWidth,
    height: 240,
    alignSelf: 'center',
  }
})


