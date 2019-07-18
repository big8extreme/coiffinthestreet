import React from 'react';
import { connect } from "react-redux";
import { fetchMaraudes, fetchMaraudesByLoc } from '../../../store/actions/maraude';
import { setUserLocation } from '../../../store/actions/user';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import { getCluster } from "../../../utils/MapUtils";
import MapToolTip from './MapToolTip';
import ClusterMarker from './ClusterMarker';
import CreateMaraudeButton from '../../../components/CreateMaraudeButton';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
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
      region: INITIAL_POSITION
    };
  }
  componentDidMount = async () => {
    maraudesToMarkers(this.props.maraude.maraudes)
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      await this._getLocationAsync();
    }
    this.props.setUserLocation(this.state.region)
    this.props.fetchMaraudesByLoc();
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ ...this.state, region: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }, coordLoaded: true });
    }
  };

  fetchByLocAsync = (region) => {
    clearTimeout(this.maraudesTimer);
    this.maraudesTimer = setTimeout(() => {
      this.props.fetchMaraudesByLoc(region);
    }, 2000)
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
        <Callout tooltip style={{ width: 220 }} onPress={() => this.props.navigation.navigate('List', { city: maraude.city })}>
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
          showsUserLocation={false}
          style={Style.map}
          loadingIndicatorColor={"#ffbbbb"}
          loadingBackgroundColor={"#ffbbbb"}
          region={region}
          onRegionChangeComplete={region => {
            this.setState({ region })
            this.fetchByLocAsync(region)
          }}>
          {cluster.markers.map((marker, index) => this.renderMarker(marker, index))}
        </MapView>
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: '10%',
          }}>
          {
            this.props.auth.user.isConnected &&
            <CreateMaraudeButton navigation={this.props.navigation} label='Ajouter une maraude' />
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes,
  setUserLocation,
  fetchMaraudesByLoc
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMarker);

