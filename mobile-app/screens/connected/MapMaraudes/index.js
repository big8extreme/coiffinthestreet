import React, { Component } from "react";
import { Container } from "native-base";
import { connect } from "react-redux";
import MapMarker from "./MapMarker";

export class MapMaraudes extends Component {
  
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <MapMarker navigation={{navigate}} />
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
)(MapMaraudes);
