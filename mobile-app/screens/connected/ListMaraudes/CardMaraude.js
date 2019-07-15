import React from 'react'
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Icon } from "native-base";
import moment from "moment";
import ValidateButton from '../../../components/ValidateButton';
import PhotoMaraude from '../../public/NewsFeed/PhotoMaraude'

export default function CardMaraude({ maraude = {}, navigation = {} }) {
  return (
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
          fontWeight: "bold",
          paddingTop: 10,
          paddingLeft: 60
        }}
      >
        {maraude.title}
      </Text>
      <Text style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 30 }}>
        <Text style={{ color: "#929292", textTransform: 'uppercase', fontSize: 14 }}>Le :</Text>  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{moment(maraude.startAt).format("DD/MM/YYYY")}</Text>  <Text style={{ color: "#929292", textTransform: 'uppercase', fontSize: 14 }}>à</Text>  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{moment(maraude.startAt).format("HH[h]mm")}</Text>
      </Text>
      <View>
        <Text
          style={{
            fontSize: 14,
            color: "#929292",
            fontStyle: "italic",
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 60
          }}
        >
          {maraude.description}
        </Text>
      </View>
      <ScrollView horizontal>
      {
                      maraude.photos.map((photo, index) => {
                        return (
                          <PhotoMaraude
                            key={`photo-${index}`}
                            photo={photo}
                            title={maraude.title}
                            description={maraude.description}
                            city={maraude.city}
                            startAt={maraude.startAt}
                            index={index}
                          />
                        );
                      })
                    }
        {console.log(maraude, 'hey')}
        
        </ScrollView>
      <View>
        <ValidateButton
          label="Je souhaite participer"
          onPress={() => navigation.navigate('Participant', { maraudeId: maraude.id })}
        />
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
    marginBottom: 60,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  }
});
