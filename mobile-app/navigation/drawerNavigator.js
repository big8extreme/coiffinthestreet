import React from 'react'
import { createDrawerNavigator, DrawerActions } from 'react-navigation'
import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import BottomTabNavigator from './bottomTabNavigator'
import LoginForm from '../screens/public/LoginForm'
import store from '../store'
import Charte from '../screens/public/Charte'
import Contact from '../screens/connected/Profile/Contact'
import TermsOfService from '../screens/connected/TermsOfService/index'
import LegalMentions from '../screens/connected/LegalMention';

const { width } = Dimensions.get('screen')

export default createDrawerNavigator({
  BottomTab: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: "",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.flex}>
              <Icon name="ios-pin" size={25} style={styles.icon} />
              <Text style={styles.text}>Maraudes</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Contacter l'administrateur",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.flex}>
              <Icon name="ios-mail" size={25} style={styles.icon} />
              <Text style={styles.text}>Contacter l'administrateur</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Se connecter",
        drawerLabel: () => {
          return store.getState().auth.user.isConnected ? null :
            <View style={styles.view}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.flex}>
                <Icon name="ios-cut" size={25} style={styles.icon} />
                <Text style={styles.text}>Je suis coiffeur(se)</Text>
                <Text style={{ color: 'white', fontStyle: 'italic' }}> se connecter</Text>
              </TouchableOpacity>
            </View>
        }
      }
    }
  },
  Associations: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Associations",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity style={styles.flex}>
              <Icon name="ios-people" size={25} style={styles.icon} />
              <Text style={styles.text}>Associations</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  Charte: {
    screen: Charte,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Charte",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('Charte')} style={styles.flex}>
              <Icon name="ios-ribbon" size={25} style={styles.icon} />
              <Text style={styles.text}>Charte</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  WhoWeAre: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Qui sommes nous ?",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity style={styles.flex}>
              <Icon name="ios-information-circle" size={25} style={styles.icon} />
              <Text style={styles.text}>Qui sommes nous ?</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  CGU: {
    screen: TermsOfService,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Conditions générales d'utilisation",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('CGU')} style={styles.flex}>
              <Icon name="ios-list-box" size={25} style={styles.icon} />
              <Text style={styles.text}>Conditions générales d'utilisation</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  Legals: {
    screen: LegalMentions,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Mentions légales",
        drawerLabel: () => {
          return <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate('LegalMentions')} style={styles.flex}>
              <Icon name="ios-book" size={25} style={styles.icon} />
              <Text style={styles.text}>Mentions légales</Text>
            </TouchableOpacity>
          </View>
        }
      }
    }
  },
  Close: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Close",
        drawerLabel: () => {
          return <TouchableOpacity
            onPress={() => { navigation.dispatch(DrawerActions.closeDrawer()) }}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: 100,
            }}>
            <Icon name="ios-close" size={30} style={{ color: "white", marginRight: 10, marginLeft: 10 }} />
            <Text style={{ marginRight: 20, color: "white", fontWeight: 'bold' }}>Fermer</Text>
          </TouchableOpacity>
        }
      }
    }
  },
},
  {
    initialRouteName: 'BottomTab',
    drawerPosition: 'right',
    drawerBackgroundColor: "#2D2D2D",
    drawerWidth: Math.min(width) * 1,
    navigationOptions: { header: null },
  })

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 90,
  },
  view: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flex: 1,
  },
  icon: {
    color: 'white',
    marginRight: 10,
    marginLeft: 10
  }
})