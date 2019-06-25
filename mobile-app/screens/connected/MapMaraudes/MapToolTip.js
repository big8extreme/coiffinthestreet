import React from "react";
import { TouchableOpacity } from 'react-native';
import {
  View, Text } from "native-base";
import moment from "moment";



function MapToolTip({ maraude }) {
    return (
      <View style={{ backgroundColor: "#646464", padding:10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
        <TouchableOpacity
          onPress={() => {
              navigate("List");
          }}>
          <Text style={{ fontWeight:'bold', fontSize: 15, color: '#FFF', paddingBottom: 5 }} onPress={() => {
            navigate("List");
          }}>{maraude.title}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>Organisateur de la maraude: {maraude.userId}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>{maraude.description}</Text>
          <Text style={{ fontSize: 15, color: '#FFF', paddingBottom: 5 }}>Le: {moment(maraude.startAt).format("DD/MM/YYYY")} à {moment(maraude.startAt).format("HH[h]mm")}</Text>  
        </TouchableOpacity>
      </View>
    );
  }

export default MapToolTip;