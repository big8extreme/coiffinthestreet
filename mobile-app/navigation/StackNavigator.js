import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../screens/public/LoginForm'
import Profile from '../screens/connected/Profile'
import Contact from '../screens/connected/Profile/contact';


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
    Login: { screen: Contact }
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