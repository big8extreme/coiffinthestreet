import React from "react";
import { StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, View, Icon, Button } from "native-base";

const CardMaraude = () => (
  <ScrollView>
    <View style={styles.shadow}>
      <Icon
        style={{
          color: "#E6E6E6",
          fontSize: 25,
          position: "absolute",
          paddingTop: 20,
          paddingLeft: 30
        }}
        name="ios-pin"
      />
      <Text
        style={{
          fontSize: 20,
          color: "#112249",
          fontWeight: "bold",
          fontFamily: "Georgia",
          textAlign: "center",
          padding: 10
        }}
      >
        Quartier du vieux port
      </Text>
      <Text
        style={{
          fontSize: 14,
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          Le :{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>07/11</Text>
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          {" "}
          à{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>17h30</Text>
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#929292",
          fontStyle: "italic",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 40 }}>
        <Image
          source={require("../../../assets/btn.png")}
          style={{ marginTop: 15, marginLeft: 22 }}
        />
        <Text
          style={{
            flex: 1,
            position: "absolute",
            color: "white",
            fontFamily: "Sedgwick",
            fontSize: 18,
            paddingTop: 60,
            paddingLeft: 85
          }}
        >
          Je souhaite participer
        </Text>
      </View>
    </View>
    <View style={styles.shadow}>
      <Icon
        style={{
          color: "#E6E6E6",
          fontSize: 25,
          position: "absolute",
          paddingTop: 20,
          paddingLeft: 30
        }}
        name="ios-pin"
      />
      <Text
        style={{
          fontSize: 20,
          color: "#112249",
          fontWeight: "bold",
          fontFamily: "Georgia",
          textAlign: "center",
          padding: 10
        }}
      >
        Quartier du vieux port
      </Text>
      <Text
        style={{
          fontSize: 14,
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          Le :{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>07/11</Text>
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          {" "}
          à{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>17h30</Text>
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#929292",
          fontStyle: "italic",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 40 }}>
        <Image
          source={require("../../../assets/btn.png")}
          style={{ marginTop: 15, marginLeft: 22 }}
        />
        <Text
          style={{
            flex: 1,
            position: "absolute",
            color: "white",
            fontFamily: "Sedgwick",
            fontSize: 18,
            paddingTop: 60,
            paddingLeft: 85
          }}
        >
          Je souhaite participer
        </Text>
      </View>
    </View>
    <View style={styles.shadow}>
      <Icon
        style={{
          color: "#E6E6E6",
          fontSize: 25,
          position: "absolute",
          paddingTop: 20,
          paddingLeft: 30
        }}
        name="ios-pin"
      />
      <Text
        style={{
          fontSize: 20,
          color: "#112249",
          fontWeight: "bold",
          fontFamily: "Georgia",
          textAlign: "center",
          padding: 10
        }}
      >
        Quartier du vieux port
      </Text>
      <Text
        style={{
          fontSize: 14,
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          Le :{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>07/11</Text>
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            textTransform: "uppercase",
            fontFamily: "Georgia"
          }}
        >
          {" "}
          à{" "}
        </Text>
        <Text style={{ fontFamily: "Georgia" }}>17h30</Text>
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#929292",
          fontStyle: "italic",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 40 }}>
        <Image
          source={require("../../../assets/btn.png")}
          style={{ marginTop: 15, marginLeft: 22 }}
        />
        <Text
          style={{
            flex: 1,
            position: "absolute",
            color: "white",
            fontFamily: "Sedgwick",
            fontSize: 18,
            paddingTop: 60,
            paddingLeft: 85
          }}
        >
          Je souhaite participer
        </Text>
      </View>
    </View>
  </ScrollView>
);
export default CardMaraude;

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    margin: 15,
    shadowColor: "#000",
    backgroundColor: "#FFF",
    borderRadius: 7,
    padding: 10,
    height: 210,
    marginBottom: 40,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  }
});
