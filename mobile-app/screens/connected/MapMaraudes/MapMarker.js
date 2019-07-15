import React from 'react';
import { connect } from "react-redux";
import { fetchMaraudes } from '../../../store/actions/maraude';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';
import MapView, { Callout, Marker } from "react-native-maps";
import { getCluster } from "../../../utils/MapUtils";
import MapToolTip from './MapToolTip';
import ClusterMarker from './ClusterMarker';
import ButtonMapCreateMaraude from '../../../components/ButtonMapCreateMaraude';


const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFill
  }
});

const INITIAL_POSITION = {
  latitude: 43.3,
  longitude: 5.4,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
}

function maraudesToMarkers(maraudeArray) {
  const markers = maraudeArray.map((maraude) => {
    let marker = {
      geometry: {
        coordinates: [parseFloat(maraude.longitude), parseFloat(maraude.latitude)]
      },
      properties: {
        ...maraude
      }
    }
    return marker
  })
  return markers
}

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: INITIAL_POSITION,
    };
  }
  componentDidMount() {
    this.props.fetchMaraudes();
    maraudesToMarkers(this.props.maraude.maraudes)
  }
  renderMarker = (marker, index) => {
    const key = index + marker.geometry.coordinates[0];
    const { navigate } = this.props.navigation;
    if (marker.properties.cluster) {
      return (
        <ClusterMarker longitude={marker.geometry.coordinates[0]} latitude={marker.geometry.coordinates[1]} count={marker.properties.point_count} key={index} markers={marker.properties.data} />
      );
    }
    const maraude = this.props.maraude.maraudes.filter((maraude) => {
      return maraude.id === marker.properties.id;
    })[0];
    return (
      <Marker
        key={key}
        coordinate={{
          latitude: marker.geometry.coordinates[1],
          longitude: marker.geometry.coordinates[0]
        }}
        image={require('../../../assets/pin.png')}
      >
        <Callout tooltip style={{ width: 220 }} onPress={() => this.props.navigation.navigate('Participant', {city: maraude.city})}>
          <MapToolTip navigation={{ navigate }} maraude={maraude} />
        </Callout>
      </Marker>
    );
  };
  render() {
    const { region } = this.state;
    const allCoords = maraudesToMarkers(this.props.maraude.maraudes);
    const cluster = getCluster(allCoords, region);
    return (
      <View style={Style.container}>
        <MapView
          showsUserLocation={true}
          style={Style.map}
          loadingIndicatorColor={"#ffbbbb"}
          loadingBackgroundColor={"#ffbbbb"}
          region={region}
          onRegionChangeComplete={region => this.setState({ region })}>
          {cluster.markers.map((marker, index) => this.renderMarker(marker, index))}
        </MapView>
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 10,     
          }}>
            <View>
              <ButtonMapCreateMaraude navigation={this.props.navigation} label='Ajouter une maraude'/>
            </View>
    </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMarker);

