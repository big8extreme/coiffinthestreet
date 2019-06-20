import React from 'react'
import { StyleSheet } from "react-native";
import { Text, View, Icon } from "native-base";
import moment from "moment";
import { Svg } from "expo";
import ValidateButton from '../../../components/ValidateButton';

export default function CardMaraude({ maraude }) {
  return (
    <View style={styles.shadow}>
      <Icon
        style={{
          color: "#E6E6E6",
          fontSize: 25,
          position: "absolute",
          paddingTop: 20,
          paddingLeft: 80
        }}
        name="ios-pin"
      />
      <Text
        style={{
          fontSize: 20,
          color: "#112249",
          fontWeight: "bold",
          textAlign: "center",
          padding: 10
        }}
      >
        {maraude.title}
      </Text>
      <Text>
          <Text style={{ color: "#929292" }}>Le :</Text>  <Text>{moment(maraude.startAt).format("DD/MM/YYYY")}</Text>  <Text>à</Text>  <Text>{moment(maraude.startAt).format("HH[h]mm")}</Text>
          </Text>
      <View>
      <Text
        style={{
          fontSize: 14,
          color: "#929292",
          fontStyle: "italic",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        {maraude.description}
      </Text>
      </View>
      <View>
        <ValidateButton label="test" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    margin: 15,
    shadowColor: "#000",
    backgroundColor: "#FFF",
    borderRadius: 7,
    padding: 10,
    height: 'auto',
    marginBottom: 40,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  }
});
