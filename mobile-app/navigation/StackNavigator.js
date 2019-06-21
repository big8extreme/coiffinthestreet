import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation"
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm"
import Profile from "../screens/connected/Profile"
import Discover from '../screens/public/Discover/discover'
import SignupForm from '../screens/public/SignupForm/MyForm'
import DrawerMenu from './drawerNavigator'
import Charte from '../screens/public/Charte/charte'
import Contact from '../screens/connected/Profile/Contact'

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Contact: { screen: Contact },
  },
  {
    initialRouteName: "Profile",
    navigationOptions: { header: null },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginForm },
    Signup: { screen: SignupForm },
    Discover: { screen: Discover },
    drawerMenu: { screen: DrawerMenu },
    BottomTabNav: { screen: BottomTabNav },
    Charte: { screen: Charte },
    
  },
  {
    initialRouteName: "Discover",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Tab: BottomTabNav,
      App: AppStack,
      Auth: AuthStack,
      DrawerMenu: DrawerMenu
    },
    {
      initialRouteName: "Auth"
    }
  )
);