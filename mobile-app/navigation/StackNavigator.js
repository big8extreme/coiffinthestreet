import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import Contact from "../screens/connected/Profile/Contact_Components/contact";
import Discover from '../screens/public/Discover/discover'
import SignupForm from '../screens/public/SignupForm/MyForm'

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Contact: { screen: Contact },
  },
  {
    initialRouteName: "Profile"
  },
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginForm },
    Signup: { screen: SignupForm },
    Discover: { screen: Discover },
  },
  {
    initialRouteName: "Discover"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Tab: BottomTabNav,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Auth"
    }
  )
);