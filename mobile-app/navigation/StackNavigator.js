import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../screens/public/LoginForm'
import Profile from '../screens/connected/Profile'

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