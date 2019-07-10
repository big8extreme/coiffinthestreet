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
import Participant from '../screens/public/Participant';
import forgetPassword from '../screens/public/LoginForm/forgetPassword/forgetPassword';
import LegalMention from "../screens/connected/LegalMention";
import MaraudeForm from '../screens/connected/Maraudes/MaraudeCreationForm';
import StartApp from '../screens/public/StartApp/Startapp'


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
    Signup: { screen: SignupForm },
    Discover: { screen: Discover },
    Participant: { screen: Participant },
    drawerMenu: { screen: DrawerMenu },
    BottomTabNav: { screen: BottomTabNav },
    Charte: { screen: Charte },
    Whoweare: { screen: Whoweare },
    Map: { screen: MapMaraudes },
    List: { screen: ListMaraudes },
    LegalMention: { screen: LegalMention },
    MaraudeForm: { screen: MaraudeForm },
    StartApp: { screen: StartApp},
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
