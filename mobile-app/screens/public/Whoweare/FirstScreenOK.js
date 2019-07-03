import * as React from 'react';
import {  View, StyleSheet,ScrollView } from "react-native";
import { ListItem, List } from "react-native-elements";
import { Icon } from 'react-native-elements';
export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };

  }

  ajoutericon(){

    return (
    
      <View style={{ width: '100%', flexDirection: 'column' }}>

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>
      </View>
    
    )
    }
  render() {
    const list = [
      {
        name: "Amy Farha",
        avatar_url:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        },
        {
        name: "Amy Farha",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        subtitle: "December 8, 2017"
        },
        {
        name: "Chris Jackson",
        avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
        subtitle: "December 8, 1973"
        }
        ];
    
    return (

      <View>
      <ScrollView>
         {
            list.map((l, i) => (
               <View key = {i}>
               <ListItem
          roundAvatar
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