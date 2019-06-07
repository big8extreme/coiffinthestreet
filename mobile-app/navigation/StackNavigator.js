import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../screens/public/LoginForm'
import Profile from '../screens/connected/Profile'
import Connexion from '../screens/public/connexion/connexion';

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

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
));