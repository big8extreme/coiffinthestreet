import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";
import MaraudeCreationForm from "../screens/connected/Maraudes/MaraudeCreationForm";

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile },
    MaraudeForm: { screen: MaraudeCreationForm }
  },
  {
    initialRouteName: "MaraudeForm"
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
    },
    {
      initialRouteName: "App"
    }
  )
);