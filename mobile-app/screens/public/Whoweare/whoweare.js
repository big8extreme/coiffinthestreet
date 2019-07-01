import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
 
export default class Whoweare extends React.Component {
  constructor(props) {
    super(props);
    //state to manage the screen visible at a time
    this.state = { val: 1 };
  }
  renderElement() {
    //You can add N number of Views here in if-else condition
    if (this.state.val === 1) {
      //Return the FirstScreen as a child to set in Parent View
      return <FirstScreen />;
    } else if (this.state.val === 2) {
      //Return the SecondScreen as a child to set in Parent View
      return <SecondScreen />;
    } else {
      //Return the ThirdScreen as a child to set in Parent View
      return <ThirdScreen />;
    }
  }
  render() {
    return (
      <React.Fragment>
      <View style={styles.container}>
     <Text style={styles.Titletext}>Qui Sommes Nous</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 1 })}>
            <Text style={{ color: '#ffffff' }}>Fondateurs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 2 })}>
            <Text style={{ color: '#ffffff' }}>Bénévoles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ val: 3 })}>
            <Text style={{ color: '#ffffff' }}>Développeurs</Text>
          </TouchableOpacity>
        </View>
 

        <Text style={styles.paragraph}>
        LE DON DE SOI N'A PAS DE PRIX
        </Text>
 
        <View style={{ backgroundColor: '#ffffff' }}>
          {this.renderElement()}
        </View>
      </View>

      </React.Fragment>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E4E4E',
    padding: 8,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
Titletext: {
    color: 'white',
    fontSize: 35,
    fontFamily: "Sedgwick",
    textAlign: 'center',
}
});