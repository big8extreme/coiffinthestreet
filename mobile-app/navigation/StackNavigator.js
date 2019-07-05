import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation"
import BottomTabNav from './bottomTabNavigator';
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import Discover from '../screens/public/Discover/discover';
import SignupForm from '../screens/public/SignupForm/MyForm';
import DrawerMenu from './drawerNavigator';
import Charte from '../screens/public/Charte';
import Whoweare from '../screens/public/Whoweare/whoweare';
import Contact from '../screens/connected/Profile/Contact';
import MapMaraudes from '../screens/connected/MapMaraudes';
import ListMaraudes from '../screens/connected/ListMaraudes';
import Participation from '../screens/public/Participation';

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    Contact: { screen: Contact },
    Participation: { screen: Participation },
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
    Participation: { screen: Participation },
    drawerMenu: { screen: DrawerMenu },
    BottomTabNav: { screen: BottomTabNav },
    Charte: { screen: Charte },
    Whoweare: { screen: Whoweare },
    Map: { screen: MapMaraudes },
    List: { screen: ListMaraudes },
  },
  {
    initialRouteName: "BottomTabNav",
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