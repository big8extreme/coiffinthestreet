import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import Contact from "../screens/connected/Profile/Contact_Components/contact";
import Charte from "../screens/public/Charte/charte";
import Discover from '../screens/public/Discover/discover'
import SignupForm from '../screens/public/SignupForm/MyForm'
import drawerMenu from './drawerNavigator'
import MaraudeCreationForm from "../screens/connected/Maraudes/MaraudeCreationForm";

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Contact: { screen: Contact },
    MaraudeForm: { screen: MaraudeCreationForm }
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
      drawerMenu: drawerMenu
    },
    {
      //initialRouteName: "Tab"
      //initialRouteName: "App"
      initialRouteName: "Auth"
    }
  )
);