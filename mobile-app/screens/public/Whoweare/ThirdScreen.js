import * as React from 'react';
import {  View, StyleSheet,ScrollView } from "react-native";
import { ListItem, List } from "react-native-elements";
import { Icon } from 'react-native-elements';
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
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Hafid BENAMAR",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557927153/auyjgpekylappihrymnt.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Stephane URTH ",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557925944/om4hgftns6vld2try9a1.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Bastien ALESSANDRI",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557849649/ddtt2fdh7tyzlkngfqax.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Damien CASTELLO",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557993798/glspwtmqdnpjtdigv0mm.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Jérémy ORTUNO",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557824538/qvxhlw7dfaz9g3ci5uib.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Sarah CABRAL",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557861070/qg6tzvbictdcdp1zu16h.png",
        subtitle: "Développer web fullstack JS"
      },
      {
        name: "Radouane BOUKERCHE",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557754105/ah89cp0vsrxtgioukxrm.png",
        subtitle: "Développer web fullstack JS"
      },
      {

        name: "Amy111 Farha",
        avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris1111 Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy2222 Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chrisddd Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy 222Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },

    
    ];


    return (
      <View style={styles.container}>
        <ScrollView>
          {
            list.map((l, i) => (
              <View key={i}>
                           <ListItem
                  avatar={{ uri: l.avatar_url }}
                  key={i}
                  title={l.name}
                  subtitle={`Last Practiced: ${l.subtitle}`}
                />
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4E4E4E',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },


});