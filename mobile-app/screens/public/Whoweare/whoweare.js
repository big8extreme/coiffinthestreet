import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import GlobalFooter from '../../../components/GlobalFooter';
import { ScrollView } from 'react-native-gesture-handler';

export default class Whoweare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 1 };
  }
  renderElement() {
    if (this.state.val === 1) {
      return <FirstScreen />;
    }
    // else if (this.state.val === 2) {
    //   return <SecondScreen />;
    // } 
    else {
      return <ThirdScreen />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#2D2D2D' }} />
        <View style={styles.container}>
          <Text style={styles.Titletext}>Qui Sommes Nous</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ val: 1 })}>
              <Text style={{ color: '#ffffff' }}>L' Equipe</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ val: 2 })}>
              <Text style={{ color: '#ffffff' }}>Coiffeurs</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ val: 3 })}>
              <Text style={{ color: '#ffffff' }}>Développeurs</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.paragraph}>
            Le don de soi n'a pas de prix
        </Text>
          <ScrollView>
            <View style={{ backgroundColor: '#ffffff', marginBottom: 100 }}>
              {this.renderElement()}
            </View>
          </ScrollView>
        </View>
        <GlobalFooter />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    padding: 10
  },
  paragraph: {
    margin: 24,
    color: 'white',
    fontFamily: 'Tinos_bold',
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
    paddingTop: 20,
    paddingBottom: 30,
    color: 'white',
    fontSize: 35,
    fontFamily: "Sedgwick",
    textAlign: 'center',
  }
});


