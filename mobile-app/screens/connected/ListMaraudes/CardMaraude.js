import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Icon } from "native-base";
import moment from "moment";
import ValidateButton from "../../../components/ValidateButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardMaraude({ maraude = {}, navigation = {}, currentUserId = null }) {
  return (
    <React.Fragment>
      <View style={styles.shadow}>
        <Icon
          style={{
            color: "#E6E6E6",
            fontSize: 25,
            position: "absolute",
            paddingTop: 20,
            paddingLeft: 40
          }}
          name="ios-pin"
        />
        <Text
          style={{
            fontSize: 20,
            color: "#112249",
            paddingTop: 10,
            paddingLeft: 60,
            fontFamily: "Tinos_bold",
          }}
        >
          {maraude.title}
        </Text>
        {
          // if current user is author and maraude is passed, then currentUser can add photos
          (maraude.author.id === currentUserId) && (new Date(maraude.endAt) < new Date()) &&
          <TouchableOpacity>
            <Text>Ajouter des photos</Text>
          </TouchableOpacity>
        }
        <Text style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 30 }}>
          <Text
            style={{
              color: "#929292",
              textTransform: "uppercase",
              fontSize: 16,
              fontFamily: 'Tinos'
            }}
          >
            Le :
          </Text>{" "}
          <Text style={{ fontWeight: "bold", fontSize: 15, fontFamily: 'Tinos_bold' }}>
            {moment(maraude.startAt).format("DD/MM/YYYY")}
          </Text>{" "}
          <Text
            style={{
              color: "#929292",
              textTransform: "uppercase",
              fontSize: 16,
              fontFamily: 'Tinos',
            }}
          >
            à
          </Text>{" "}
          <Text style={{ fontWeight: "bold", fontSize: 15, fontFamily: 'Tinos_bold' }}>
            {moment(maraude.startAt).format("HH[h]mm")}
          </Text>
        </Text>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#929292",
              fontFamily: 'Tinos',
              fontStyle: "italic",
              paddingLeft: 30,
              paddingRight: 30,
              paddingBottom: 60
            }}
          >
            {maraude.description}
          </Text>
        </View>
      </View>
      <View
        style={{ position: "absolute", marginTop: "50%", marginLeft: "5%" }}
      >
        <ValidateButton
          label="Je souhaite participer"
          onPress={() =>
            navigation.navigate("Participant", { maraudeId: maraude.id })
          }
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  shadow: {
    margin: 15,
    shadowColor: "#000",
    backgroundColor: "#FFF",
    borderRadius: 7,
    padding: 10,
    height: 200,
    marginBottom: 60,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  }
});
