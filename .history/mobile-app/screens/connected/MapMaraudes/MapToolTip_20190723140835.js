import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'native-base';
import moment from "moment";

class MapToolTip extends React.Component {
  render () {
    return  (
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
        <View style={{justifyContent: 'center', alignItems: 'center', width: '80%'}}>
          <Text style={{ fontFamily: "Sedgwick", fontWeight:'bold', fontSize: 25, color: '#FFF', paddingBottom: 5, alignSelf: 'center' }}>{this.props.maraude.title}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{this.props.maraude.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ color: "#FFF", textTransform: 'uppercase', fontSize: 14, fontWeight: 'bold' }}>Le : </Text>
            <Text style={{ fontSize: 14, color: "#FFF" }}>{moment(this.props.maraude.startAt).format("DD/MM/YYYY")} </Text>
            <Text style={{ color: "#FFF", textTransform: 'uppercase', fontSize: 14, fontWeight: 'bold' }}>à </Text>          
            <Text style={{ fontSize: 14, color: "#FFF" }}>{moment(this.props.maraude.startAt).format("HH[h]mm")} </Text>
          </View>
        </View>
        <Button bordered light style={{ alignSelf:'center', padding: 10, margin: 5}} >
          <Text style={{color: 'white'}}>Je souhaite participer</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(MapToolTip);
