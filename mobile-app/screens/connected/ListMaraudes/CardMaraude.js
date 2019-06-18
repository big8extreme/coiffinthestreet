import React from 'react'
import { StyleSheet } from "react-native";
import { Text, View, Icon } from "native-base";
import moment from "moment";
import { Svg } from "expo";

export default function CardMaraude({maraude}) {
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
            <Text
              style={{
                fontSize: 14,
                paddingTop: 18,
                paddingBottom: 18
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  textTransform: "uppercase",
                  fontFamily: "Georgia"
                }}
              >
                <Text style={{ color: "#929292" }}>Le :</Text>
                <Text>{moment(maraude.startAt).format("DD/MM/YYYY")}</Text>
                <Text
                  style={{
                    color: "#929292",
                    marginRight: 30,
                    marginLeft: 30
                  }}
                >
                  à
                </Text>
                <Text>{moment(maraude.startAt).format("HH[h]mm")}</Text>
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#929292",
                  textTransform: "uppercase"
                }}
              />
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
            {maraude.description}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingTop: 40
              }}
            />
            <View>
              <Svg
                height={100}
                width={400}
                marginTop={10}
                style={{ position: "relative" }}
              >
                <Svg.Path
                  d="M43.2791592,3.5 C40.0544477,3.5 37.1074306,5.32478241 35.6701474,8.21147275 L11.5481664,56.6589108 C10.9922563,57.7754201 10.6888692,59.0005889 10.6595302,60.2474924 C10.5491032,64.9406138 14.2641111,68.8346591 18.9572325,68.945086 L287.216538,75.2571015 C291.432985,75.3563125 295.084493,72.3487197 295.795003,68.1913844 L305.153668,13.4319309 C305.234511,12.9589056 305.27515,12.4798838 305.27515,12 C305.27515,7.30557963 301.46957,3.5 296.77515,3.5 L43.2791592,3.5 Z"
                  fill="#112249"
                />
                {/* <Text style={{ color: '#FFF', paddingLeft: 90, position: 'absolute', paddingTop: 40 }}>Je souhaite participer</Text> */}
              </Svg>
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
