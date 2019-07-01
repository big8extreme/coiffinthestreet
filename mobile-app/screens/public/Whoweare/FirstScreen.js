import * as React from 'react';
import {  View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import { Icon } from 'react-native-elements'
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
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        icon: 'mail'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        icon: 'flight-takeoff'
      },

    ]
    return (
      <React.Fragment>
      <View style={styles.container}>
   
<Card title="Fondateurs" >
  {
  list.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}  
      rightIcon={{ name: l.icon }}
    />
 

  ))
 }
</Card>
     </View>


  

</React.Fragment>
     
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