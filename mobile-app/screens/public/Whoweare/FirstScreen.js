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
        name: 'Kevin Ortega',
        avatar_url: 'https://img.aws.la-croix.com/2018/10/25/1200978629/kevinortegaok_0_729_731.jpg',
        titled: 'President Fondateur',
        subtitle: 'Coiffeur',
        icon: 'mail'
      },
      {
        name: 'Bayram Tayari',
        avatar_url: 'https://media.licdn.com/dms/image/C4D03AQELNqIkI5N2DQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=YSygg38Mv0YIfMUIldkIhjm4gMiYPPxTqVh276m7XD4',
        titled: 'membres bienfaiteurs',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail'
      },
      {
        name: 'Aurelien Mutin',
        avatar_url: 'https://media.licdn.com/dms/image/C5603AQH86uUJaxHYoA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=_e0nLaVwQGVQbfqkZGDdSVNlQ9l-Vfr_3rMh27fKsIY',
        titled: 'membres bienfaiteurs',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail'
      },
      {
        name: 'Hugo Averty',
        avatar_url: 'https://media.licdn.com/dms/image/C5103AQG2UhyJGhHB8w/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=tPmwZf_UzgM5x86cY85y31GlNfCypdjTzKLAKF4MX3M',
        titled: 'membres bienfaiteurs',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail'
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
      subtitle={l.titled}  
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