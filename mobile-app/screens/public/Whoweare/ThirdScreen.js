import * as React from 'react';
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import { ListItem, Card } from "react-native-elements";

export default class ThirdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };
  }
  render() {
    const list = [
      {
        name: "Djamel AMMOUR",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1556907444/vcz3fxawxwxscmu7t7gl.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Hafid BENAMAR",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557927153/auyjgpekylappihrymnt.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Stephane URTH ",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557925944/om4hgftns6vld2try9a1.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Bastien ALESSANDRI",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557849649/ddtt2fdh7tyzlkngfqax.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Damien CASTELLO",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557993798/glspwtmqdnpjtdigv0mm.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Jérémy ORTUNO",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557824538/qvxhlw7dfaz9g3ci5uib.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Sarah CABRAL",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557861070/qg6tzvbictdcdp1zu16h.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      },
      {
        name: "Radouane BOUKERCHE",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557754105/ah89cp0vsrxtgioukxrm.png",
        subtitle: "Développer web fullstack JS",
        icon: 'mail'
      }

    ];

    return (
      <View style={styles.container}>
        <ScrollView >
          {
            <Card >
              {
                list.map((l, i) => (
                  <View key={i}>
                    <ListItem
                      leftAvatar={{ source: { uri: l.avatar_url } }}
                      key={i}
                      title={l.name}
                      subtitle={`Last Practiced: ${l.subtitle}`}
                      rightIcon={{ name: l.icon }}
                      onPress={() => Linking.openURL("mailto:support@example.com")}
                    />
                  </View>
                ))
              }
            </Card>
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: '#4E4E4E',
  },
});