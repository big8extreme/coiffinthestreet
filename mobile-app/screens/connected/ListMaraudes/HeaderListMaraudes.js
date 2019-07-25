import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { fetchMaraudesByCity, fetchMaraudes } from "../../../store/actions/maraude";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { View, SafeAreaView } from "react-native";

class HeaderListMaraudes extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.city) {
      this.props.fetchMaraudesByCity(this.props.city)
    }
  }

  updateSearch = search => {
    this.setState({ search });
  };

  submitSearch = () => {
    this.props.fetchMaraudesByCity(this.state.search)
  };

  render() {
    return (
      <View>
        <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
        <NavigationEvents
          onWillFocus={payload => {
            //FIXME add it when update on Maraude is OK
            if (!this.props.city && this.props.auth.user.isConnected) {
              this.props.fetchMaraudes({ lastweek: true })
            } else {
              this.props.fetchMaraudes()
            }
          }}
        />
        <SearchBar
          ref="searchBar"
          onChangeText={this.updateSearch}
          value={this.state.search}
          onSubmitEditing={this.submitSearch}
          placeholder="Entrez votre ville"
          rightIconContainerStyle={{ paddingRight: 15 }}
          containerStyle={{ backgroundColor: "#FBFBFB", borderBottomWidth: 0, borderTopWidth: 0 }}
          inputContainerStyle={{ backgroundColor: "#FBFBFB" }}
          inputStyle={{ borderBottomWidth: 0 }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudesByCity,
  fetchMaraudes
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderListMaraudes);
