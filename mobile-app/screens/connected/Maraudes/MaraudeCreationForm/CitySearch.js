import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Item, Input } from 'native-base';
import Axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const APIKEY = '75163db10930ab';

export default class CitySearcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }
  }

  handleTextChange = (value) => {
    this.props.onChangeText({ name: 'city', value })
    this.search(value)
  }

  search(query) {
    Axios.get(`https://eu1.locationiq.com/v1/search.php?key=${APIKEY}&countrycodes=fr&accept-language=fr&city=${query}&format=json`)
      .then((response) => {
        this.setState({ cities: response.data })
      })
      .catch((error) => { console.log(error); })
  }

  onSelectCity(city) {
    this.props.onChangeText({ longitude: 'longitude', value: city.lon })
    this.props.onChangeText({ latitude: 'latitude', value: city.lat })
    this.props.onChangeText({ city: 'city', value: city.display_name })
    console.log("HERERERERE", this.state.cities) 
  }

  render() {
    return (
      <View>
        <Text style={style.inputText}>
          Lieu :</Text>
        <Item regular
          style={{
            borderColor: this.props.errors.includes('city') ? 'red' : '#FDC500',
            width: 300,
            height: 60,
            borderRadius: 5,
            borderWidth: 1,
            marginLeft: 10,
            marginBottom: 50
          }}>
          <Input
            value={this.state.city}
            onChangeText={(value) => this.handleTextChange(value)}
            placeholder="Ville" />
        </Item>
        {
          this.state.cities.length >= 1 &&
          <View>
            <FlatList
              data={this.state.cities}
              renderItem={({ item }) => <Text onPress={() => this.onSelectCity(item.display_name,item.lat,item.lon)} style={{ 
                marginBottom: 10,
                borderWidth: 1, 
                width: 300, 
                height: 50, 
                marginLeft: 10,
              }}>
              {item.display_name}
              </Text>}
              keyExtractor={(item, index) => item.place_id}
            />
          </View>
        }
      </View >
    )
  }
}

const style = StyleSheet.create({
  inputText: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 25,
    fontWeight: 'bold'
  }
})