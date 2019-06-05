import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../screens/public/LoginForm'
import Profile from '../screens/connected/Profile'
//import MaraudeCreationForm from '../screen/connected/MaraudeCreationForm'

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile }
  },
  {
    initialRouteName: 'Profile'
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginForm }
  },
  {
    initialRouteName: 'Login'
  }
);
/*
const MaraudeCreationFormStack = createStackNavigator(
  {
    MaraudeCreationForm: { screen: MaraudeCreationForm }
  },
  {
    initialRouteName: 'MaraudeCreationForm'
  }
);
*/

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    //MaraudeCreationForm: MaraudeCreationFormStack,
  },
  {
    initialRouteName: 'Auth',
  }
));