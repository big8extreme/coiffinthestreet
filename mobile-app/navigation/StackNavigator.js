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
<<<<<<< HEAD
import LegalMention from "../screens/connected/LegalMention";
import MaraudeForm from '../screens/connected/Maraudes/MaraudeCreationForm';
import StartApp from '../screens/public/StartApp/Startapp';

=======
import MaraudeForm from '../screens/connected/Maraudes/MaraudeCreationForm'
>>>>>>> 582cff7ecd0dd23f60b64dd600c8de0034c44f5c

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
<<<<<<< HEAD
    Charte: { screen: Charte },
    Whoweare: { screen: Whoweare },
    Map: { screen: MapMaraudes },
    List: { screen: ListMaraudes },
    LegalMention: { screen: LegalMention },
    MaraudeForm: { screen: MaraudeForm },
    StartApp: { screen: StartApp},
=======
    MaraudeForm: { screen: MaraudeForm }
>>>>>>> 582cff7ecd0dd23f60b64dd600c8de0034c44f5c
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
