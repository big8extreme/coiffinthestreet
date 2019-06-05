import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Footer,
  FooterTab
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/auth";

export class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user.isConnected) {
      setTimeout(() => {
        navigate("Auth");
      }, 10);
    }
    return (
      <View style={{ flex: 1 }}>
        <Text> Hello and welcome into profile view </Text>
        <Button
          title="Click me to logout"
          onPress={() => this.props.connect()}
        />
        {/* <Container>
          <Content style={{ flex: 1 }} />
          <Footer style={{backgroundColor: '#2D2D2D'}}>
            <FooterTab>
              <Button>
                <Icon
                  name="ios-calendar"
                  size={28}
                  color={'#DADADA'}
                  onPress={() => this.props.navigation.navigate("List")}
                />
              </Button>
              <View
                style={{
                  borderRightColor: "#DADADA",
                  borderRightWidth: 1,
                }}
              />
              <Button>
                <Icon
                  name="ios-pin"
                  size={28}
                  color={'#DADADA'}
                  onPress={() => this.props.navigation.navigate("Map")}
                />
              </Button>
              <View
                style={{
                  borderRightColor: "#DADADA",
                  borderRightWidth: 1
                }}
              />
              <Button>
                <Icon
                  name="ios-images"
                  size={28}
                  color={'#DADADA'}
                  onPress={() => this.props.navigation.navigate("Feed")}
                />
              </Button>
              <View
                style={{
                  borderRightColor: "#DADADA",
                  borderRightWidth: 1
                }}
              />
              <Button>
                <Icon
                  name="ios-more"
                  size={28}
                  color={'#DADADA'}
                  onPress={() => this.props.navigation.navigate("Menu")}
                />
              </Button>
            </FooterTab>
          </Footer>
        </Container> */}
      </View> 
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

