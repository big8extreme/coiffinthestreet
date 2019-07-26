import * as React from 'react';
import { View, StyleSheet,  Linking  } from 'react-native';
import { Card,ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };
  }
  render() {
    const list = [
      {
        name: 'Bayram Tayari',
        avatar_url: 'https://media.licdn.com/dms/image/C4D03AQELNqIkI5N2DQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=YSygg38Mv0YIfMUIldkIhjm4gMiYPPxTqVh276m7XD4',
        titled: 'membre bienfaiteur',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail',
        mail: 'contact@coiffinthestreet.com'
      },
      {
        name: 'Aurelien Mutin',
        avatar_url: 'https://media.licdn.com/dms/image/C5603AQH86uUJaxHYoA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=_e0nLaVwQGVQbfqkZGDdSVNlQ9l-Vfr_3rMh27fKsIY',
        titled: 'membre bienfaiteur',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail',
        mail: 'contact@coiffinthestreet.com'
      },
      {
        name: 'Hugo Averty',
        avatar_url: 'https://media.licdn.com/dms/image/C5103AQG2UhyJGhHB8w/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=tPmwZf_UzgM5x86cY85y31GlNfCypdjTzKLAKF4MX3M',
        titled: 'membre bienfaiteur',
        subtitle: 'Co fondateur ZeDayt',
        icon: 'mail',
        mail: 'contact@coiffinthestreet.com'
      },
    ]
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Card >
            <ListItem
              leftAvatar={{ source: { uri: 'https://img.aws.la-croix.com/2018/10/25/1200978629/kevinortegaok_0_729_731.jpg' } }}
              title='Kevin Ortega'
              subtitle='President Fondateur'
              rightIcon={{ name: 'mail' }}
              onPress={() => Linking.openURL("mailto:contact@coiffinthestreet.com")}
            />
          </Card>
        </View>
        <View style={styles.container}>
          <Card title="Bénévoles" >
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.titled}
                  rightIcon={{ name: l.icon }}
                  onPress={() => Linking.openURL(`mailto:${l.mail}`)}
              
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
    backgroundColor: '#2D2D2D',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});