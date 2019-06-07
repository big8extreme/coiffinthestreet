import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';
import { connect } from "react-redux";

export class ListMaraudes extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
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
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMaraudes);
