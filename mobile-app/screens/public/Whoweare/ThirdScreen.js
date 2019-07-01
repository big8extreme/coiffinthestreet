import * as React from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
export default class ThirdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };

  }
  render() {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]


    return (
      <View style={styles.container}>
   
<Card title="Fondateurs" >
  {
  list.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
    />
  ))
 }
</Card>
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