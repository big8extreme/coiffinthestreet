import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ScrollView } from "react-native";
import { Text, Header, Item, Input, Button, Form } from "native-base";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import maraude from "../../../store/reducers/maraude";
import axios from "axios";
import CardMaraude from "./CardMaraude";
import { baseUrlApi } from '../../../apiUrl';

export default class HeaderListMaraudes extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      maraudes: [],
      search: ""
    };
  }

  componentDidMount() {
    this.submitSearch();
  }

  updateSearch = search => {
    this.setState({ search });
  };

  submitSearch = () => {
    axios.get(`${baseUrlApi}/maraudes`, { params: { city : 'Nice' }})
     .then(function (response){ 
      console.log(JSON.stringify({ maraudes: response.data.maraudes }));
     })    
     .catch(function (error) { 
       console.log(JSON.stringify({ error }));
     })
   };

  render() {
    return (
      <React.Fragment>
        <SearchBar 
        ref="searchBar"
          onChangeText={this.updateSearch}
          value={this.state.search}
          onSubmitEditing={this.submitSearch}
          placeholder="Entrez votre ville"
          rightIconContainerStyle={{paddingRight: 15}}
          containerStyle={{backgroundColor: "#FBFBFB", borderBottomWidth: 0, borderTopWidth: 0}}
          inputContainerStyle={{backgroundColor: "#FBFBFB"}}
          inputStyle={{borderBottomWidth: 0}}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderListMaraudes);
