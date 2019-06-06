import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';
import { connect } from "react-redux";
import { logout } from "../../../store/actions/auth";

export class FeedMaraudes extends Component {
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
              onPress={() => navigate("List")} />
            </Button>
          </Left>
          <Body>
            <Title>Acutalités des Maraudes</Title>
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
)(FeedMaraudes);

