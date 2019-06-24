import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Badge } from "native-base";
import { MapView } from "expo";
import MapToolTip from "./MapToolTip";
import { fetchMaraudes, showMaraude } from '../../../store/actions/maraude';

class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maraudes: [],
      maraudeId: null
    };
  }
  componentDidMount() {
    this.props.fetchMaraudes();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 43.296422,
          longitude: 5.36978,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.4001
        }}>
            {
              this.props.maraude.maraudes.map((maraude, index) =>{
              return  <MapView.Marker 
                          key={index}
                          coordinate={{
                            latitude: maraude.latitude,
                            longitude:maraude.longitude
                          }}
                          title={maraude.title}
                          description={maraude.description}
                          image={require("../../../assets/pin.png")}>
                        <Badge style={{ marginTop: -11, marginLeft: 30 }}>
                          <Text>{maraude.id}</Text>
                        </Badge>
                        <MapView.Callout tooltip style={{ width: 200 }}>
                          <MapToolTip navigation={{navigate}}/>
                        </MapView.Callout>
                      </MapView.Marker>;
            })
            }
      </MapView>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes,
  showMaraude
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMarker);