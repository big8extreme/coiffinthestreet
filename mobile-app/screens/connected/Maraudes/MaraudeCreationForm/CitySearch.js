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
    if (value && value.length < 1) {
      this.setState({ cities: [] })
    }
    this.props.handleCityChange(value)
    clearTimeout(this.requestTimer)
    this.requestTimer = setTimeout(() => {
      this.search(value)
    }, 500)
  }

  search(query) {
    Axios.get(`https://eu1.locationiq.com/v1/search.php?key=${APIKEY}&countrycodes=fr,be,ch&accept-language=fr&city=${query}&format=json`)
      .then((response) => {
        this.setState({ cities: response.data })
      })
      .catch((error) => { console.log(error); })
  }

  render() {
    return (
      <View>
        <Item regular
          style={{
            borderColor: this.props.errors.includes('city') ? 'red' : '#FDC500',
            backgroundColor: 'white',
            height: 60,
            borderRadius: 5,
            borderWidth: 1,
            marginBottom: 50
          }}>
          <Input
            value={this.props.city}
            onChangeText={(value) => this.handleTextChange(value)}
            placeholder="Ville" 
          />
        </Item>
        {
          this.state.cities && this.state.cities.length >= 1 &&
          <View style={{
            borderWidth: 1,
            marginBottom: 20,
            borderColor: 'white',
            borderRadius: 5
          }}>
            <FlatList
              data={this.state.cities}
              renderItem={({ item, index }) => <Text onPress={() => {
                this.props.handlePositionSelect(item);
                this.setState({ cities: [] })
              }
              }
                style={{
                  marginTop: 8,
                  marginBottom: 8,
                  color: 'white',
                  padding: 10,
                }}>
                {item.display_name}
              </Text>}
              keyExtractor={(item, index) => `${item.place_id}-${index}`}
            />
          </View>
        }
      </View >
    )
  }
}
// Increase the number of decimals in database  for precision
const style = StyleSheet.create({
  inputText: {
    fontFamily: 'Tinos_bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 25
  }
})