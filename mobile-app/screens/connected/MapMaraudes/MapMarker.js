import React from 'react';
import { connect } from "react-redux";
import { Fab, Toast } from 'native-base';
import { fetchMaraudes, fetchMaraudesByLoc } from '../../../store/actions/maraude';
import { NavigationEvents } from "react-navigation";
import { setUserLocation } from '../../../store/actions/user';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import { getCluster } from "../../../utils/MapUtils";
import MapToolTip from './MapToolTip';
import ClusterMarker from './ClusterMarker';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import CustomButton from '../../../components/CustomButton';
import { Icon } from 'react-native-elements';


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
      region: INITIAL_POSITION,
      mapRegion: null,
      hasLocationPermission: false,
      coordLoaded: false,
      locationResult: null,
      loaded: false,
      satelliteView: true,
      active: false,
      showToast: false
    };
  }
  //  geolocalisation
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: location });
    // Center the map on the location we just fetched.
    this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }, coordLoaded: true });
  };
  //  geolocalisation
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
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.loaded && this.state.coordLoaded) {
      const position = this.state.hasLocationPermissions ? this.state.mapRegion : INITIAL_POSITION
      this.setState({ region: position, loaded: true })
    }
  }
  
  fetchByLocAsync = (region) => {
    clearTimeout(this.maraudesTimer);
    this.maraudesTimer = setTimeout(() => {
      this.props.fetchMaraudesByLoc(region);
    }, 3000)
  }
  renderMarker = (marker, index) => {
    const key = index + marker.geometry.coordinates[0];
    const { navigate } = this.props.navigation;
    if (marker.properties.cluster) {
      return (
        <ClusterMarker navigation={this.props.navigation} longitude={marker.geometry.coordinates[0]} latitude={marker.geometry.coordinates[1]} count={marker.properties.point_count} key={index} markers={marker.properties.data} />
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
        <Callout tooltip style={{ width: 220 }} onPress={() => navigate('Participant', { city: maraude.city })}>
          <MapToolTip navigation={{ navigate }} maraude={maraude} />
        </Callout>
      </Marker>
    );
  };
  render() {
    const { region } = this.state;
    const allCoords = maraudesToMarkers(this.props.maraude.maraudes);
    const cluster = getCluster(allCoords, region);
    const satellite = this.state.satelliteView ? "standard" : "satellite";

    return (
      <View style={Style.container}>
        <NavigationEvents
          onWillFocus={payload => {
            this.fetchByLocAsync(this.state.region)
          }}
          onWillBlur={payload => {
            console.log("WILL BLUR", payload)
            clearTimeout(this.maraudesTimer);
          }}
        />
        <MapView
          mapType={satellite}
          showsUserLocation={true}
          showsCompass={true}
          showsScale={true}
          zoomControlEnabled={true}
          style={Style.map}
          initialRegion={this.state.region}
          loadingIndicatorColor={"#ffbbbb"}
          loadingBackgroundColor={"#ffbbbb"}
          region={region}
          onRegionChangeComplete={region => {
            this.setState({ region })
            this.fetchByLocAsync(region)
          }}>
          {cluster.markers.map((marker, index) => this.renderMarker(marker, index))}
        </MapView>
        <Fab
          active={this.state.active}
          style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'black' }}
          containerStyle={{position: 'absolute', top: 20, left: 10}}
          onPress={() => {this.setState({satelliteView: !this.state.satelliteView})}}>
            <Icon
            name='binoculars'
            type='font-awesome'
            color='black'
            size={25}
            />
        </Fab>
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
          }}>
          {
            this.props.auth.user.isConnected &&
            <CustomButton
              screen="MaraudeForm"
              label="Ajouter une maraude"
              fontSize={20}
              colorfill="#0F2148" />
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

