import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';
import { connect } from "react-redux";

export class FeedMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    return (
      <Container>
        <Header noShadow>
          <Left>
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
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedMaraudes);

