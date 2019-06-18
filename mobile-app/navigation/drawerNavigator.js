import { createDrawerNavigator } from "react-navigation";
import BottomTabNavigator from './bottomTabNavigator'
import LoginForm from '../screens/public/LoginForm'

export default createDrawerNavigator({
  Maraudes: { screen: BottomTabNavigator },
  Login: { screen: LoginForm, navigationOptions: { title: "Se connecter" } }
}, { initialRouteName: 'Maraudes', drawerPosition: 'right' })