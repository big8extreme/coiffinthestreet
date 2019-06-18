import React from 'react';
import { createDrawerNavigator } from "react-navigation";
import { TouchableOpacity, Text } from 'react-native'
import BottomTabNavigator from './bottomTabNavigator'
import LoginForm from '../screens/public/LoginForm'
import store from '../store'

export default createDrawerNavigator({
  Maraudes: {
    screen: BottomTabNavigator
  },
  Login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Se connecter",
        drawerLabel: () => {
          return store.getState().auth.user.isConnected ? null : <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>Se connecter</Text></TouchableOpacity>
        }
      }
    }
  }
},
  {
    initialRouteName: 'Maraudes',
    drawerPosition: 'right'
  })