import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header, Left, Button, Icon } from "native-base";
import { connect } from "react-redux";
import { fetchConfigs } from "../../../store/actions/config";

export class Whoweare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null
    };
  }
  componentDidMount() {
    this.props.fetchConfigs();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.backgroundApp}>
        <Left iosBarStyle="light-content">
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>

        <Text style={styles.Titletext}>
          Qui Sommes Nous
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchConfigs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Whoweare);

const styles = StyleSheet.create({
  backgroundApp: {
    backgroundColor: "#4E4E4E",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1
  },
  Titletext: {
    color: "white",
    fontSize: 35,
    fontFamily: "Sedgwick",
    flex: 2
  }
});
