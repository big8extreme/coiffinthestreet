import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Badge, Button } from 'native-base';
import { MapView } from "expo";
import Modal from 'react-native-modalbox';
import { withNavigation } from 'react-navigation';

class ClusterMarker extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <MapView.Marker 
            key={this.props.index}
            coordinate={{
              latitude: this.props.latitude,
              longitude: this.props.longitude
            }}
            image={require('../../../assets/pin.png')}
            onPress={() => this.refs.modal2.open()}>
            <Badge style={{ marginTop: -10, marginLeft: 30 }}>
                <Text style={{color: 'white'}}>{this.props.count}</Text>
            </Badge>
          </MapView.Marker>
          <Modal style={[styles.modal, styles.modal2]} ref={"modal2"} position={'center'} swipeToClose={false}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 10, paddingBottom: 10}}>Liste des maraudes</Text>
            <ScrollView>
                {this.props.markers.map((marker, index) => {
                  return  <Text key={index} style={{ fontSize: 15, color: '#FFF', padding: 5, alignSelf: 'center' }}>{marker.title}</Text>
                })}
            </ScrollView>
            <Button secondary style={{alignSelf:'center', paddingLeft: 10, paddingRight: 10, margin: 10}} onPress={() => navigate('List')}>
              <Text style={{color: 'white'}} >Plus de détails</Text>
            </Button>
          </Modal>
        </View>
      )
    }
}

const styles = StyleSheet.create({

    wrapper: {
      paddingTop: 50,
      flex: 1
    },
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    modal2: {
      height: 250,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      width: '80%',
      borderRadius: 10,
      marginTop: 20,  
    },
    btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10,
      borderRadius: 30,
    },
    btnModal: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 50,
      height: 50,
      backgroundColor: "transparent"
    }
  });

  export default withNavigation(ClusterMarker);