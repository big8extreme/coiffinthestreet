import * as React from 'react';
import { View, StyleSheet,  Linking  } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
export default class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };
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
        icon: 'mail'
      },
    ]
    return (
      <View style={styles.container}>
        <Card  >
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                rightIcon={{ name: l.icon }}
                onPress={() => Linking.openURL("contact@coiffinthestreet.com")}
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