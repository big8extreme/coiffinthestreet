import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation"
import BottomTabNav from './bottomTabNavigator';
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import Discover from '../screens/public/Discover/discover';
import DrawerMenu from './drawerNavigator';
import Contact from '../screens/connected/Profile/Contact';
import Participant from '../screens/public/Participant';
import forgetPassword from '../screens/public/LoginForm/forgetPassword/forgetPassword';
import MaraudeForm from '../screens/connected/Maraudes/MaraudeCreationForm'

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Contact: { screen: Contact }
  },
  {
    initialRouteName: "Profile",
    navigationOptions: { header: null },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginForm },
    forgetPassword: { screen: forgetPassword },
    Discover: { screen: Discover },
    Participant: { screen: Participant },
    BottomTabNav: { screen: BottomTabNav },
    MaraudeForm: { screen: MaraudeForm }
  },
  {
    initialRouteName: "BottomTabNav",
    headerMode: 'none',
    navigationOptions: {
      // @ts-ignore
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
      initialRouteName: "DrawerMenu"
    }
  )
);