import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { fetchMaraudesByCity } from "../../../store/actions/maraude";
import { connect } from "react-redux";

class HeaderListMaraudes extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      maraudes: [],
      search: "Marseille"
    };
  }

  componentDidMount() {
    this.submitSearch();
  }

  updateSearch = search => {
    this.setState({ search });
  };

  submitSearch = () => {
    this.props.fetchMaraudesByCity(this.state.search)
  };

  render() {
    console.log("MARAUDES", this.props.maraude)
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudesByCity
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderListMaraudes);
