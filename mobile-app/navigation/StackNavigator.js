import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import Contact from "../screens/connected/Profile/Contact_Components/contact";
import drawerMenu from './drawerNavigator'

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
    Login: { screen: LoginForm }
  },
  {
    initialRouteName: "Login"
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
      initialRouteName: "drawerMenu"
    }
  )
);