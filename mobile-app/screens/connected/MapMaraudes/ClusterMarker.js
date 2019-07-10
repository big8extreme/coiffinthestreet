import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge, Button } from 'native-base';
import { MapView } from "expo";
import { ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class ClusterMarker extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
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
          onPress = {() => {this.toggleModal(true)}}>
          <Badge style={{ marginTop: -10, marginLeft: 30 }}>
              <Text style={{color: 'white'}}>{this.props.count}</Text>
          </Badge>
        </MapView.Marker>
        <Modal 
          animationType = {"slide"} 
          transparent = {true}
          visible = {this.state.modalVisible}
          onRequestClose = {() => { console.log("Modal has been closed.") } }
          onPress={() => this.toggleModal(!this.state.modalVisible)}>
          <View style = {styles.modal}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableHighlight style={{width: 40, height: 40, alignItems: 'center', alignSelf:'center', justifyContent: 'center'}} onPress = {() => {
                  this.toggleModal(!this.state.modalVisible)}}>
                  <Text style={{color: 'white', fontSize: 15}}>X</Text>
              </TouchableHighlight>
            </View>
            <Text style={{fontFamily: "Sedgwick", fontWeight: 'bold', fontSize: 30, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: 10}}>Liste des maraudes</Text>
            <ScrollView>
                {this.props.markers.map((marker, index) => {
                  return  <ListItem
                            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', width: '80%', alignSelf: 'center'}}
                            key={index}
                            leftAvatar={{}}
                            title={marker.title}
                            titleStyle={{color: '#FFF'}}
                            subtitle={<Text style={{color: '#C0C0C0'}}></Text>}
                            rightIcon={<TouchableOpacity onPress={() => {navigate('Signup'); this.toggleModal(!this.state.modalVisible) }}>
                                        <Icon name="ios-mail" size={30} style={{color: '#FFF'}}  />
                                      </TouchableOpacity>}
                          />
                          })}
            </ScrollView>
            <Button bordered light style={{ alignSelf:'center', padding: 10, marginBottom: 30, marginTop: 10}} onPress={() => {navigate('List'); this.toggleModal(!this.state.modalVisible) }}>
            <Text style={{color: 'white'}}>Plus de détails</Text>
          </Button>
          </View>
        </Modal>
      </View> 
    )
  }
}

const styles = StyleSheet.create ({
  modal: {
    color: 'white',
    height: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '90%',
    borderRadius: 4,
    marginTop: 20,  
    alignSelf: 'center',
    marginTop: 60
  },
})

export default withNavigation(ClusterMarker);