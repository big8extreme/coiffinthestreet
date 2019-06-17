import { createDrawerNavigator } from "react-navigation";
import BottomTabNavigator from './bottomTabNavigator'

export default createDrawerNavigator({
  Maraudes: {screen: BottomTabNavigator},
  Test1: {screen: BottomTabNavigator},
  Test2: {screen: BottomTabNavigator},
  Test3: {screen: BottomTabNavigator}
}, {initialRouteName: 'Maraudes', drawerPosition: 'right'})