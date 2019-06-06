import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';
import { connect } from "react-redux";
import { logout } from "../../../store/actions/auth";

export class ListMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (!auth.user.isConnected) {
      setTimeout(() => {
        navigate("Auth");
      }, 10);
    }
    return (
      <Container>
        <Header noShadow>
          <Left>
            <Button transparent>
              <Icon 
              name='arrow-back'
              onPress={() => navigate("Map")} />
            </Button>
          </Left>
          <Body>
            <Title>Liste des Maraudes</Title>
          </Body>
          <Right>
          </Right>
        </Header>
      </Container>
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
)(ListMaraudes);
