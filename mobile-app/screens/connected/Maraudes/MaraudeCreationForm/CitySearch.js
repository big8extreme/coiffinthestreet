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
    Axios.get(`https://eu1.locationiq.com/v1/search.php?key=${APIKEY}&q=${query}&format=json`)
      .then((response) => {
        this.setState({ cities: response.data })
      })
      .catch((error) => { console.log(error); })
  }

  onSelectCity(city) {
    this.props.onChangeText({ longitude: 'city', value: city.lon })
  }

  render() {
    console.log("HERERERERE", this.state)
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
              style={{ marginTop: 5 }}
              data={this.state.cities}
              renderItem={({ item }) => <Text onPress={() => this.onSelectCity(item)}>{item.display_name}</Text>}
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