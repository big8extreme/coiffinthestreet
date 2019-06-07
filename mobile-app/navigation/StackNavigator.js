import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import BottomTabNav from './bottomTabNavigator'
import LoginForm from "../screens/public/LoginForm";
import Profile from "../screens/connected/Profile";

const TabNavFooter = createBottomTabNavigator({
    Map: {
      screen: MapMaraudes,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="ios-pin" size={30} color={tintColor} />
      },  
    },
    List: {
      screen: ListMaraudes,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="ios-calendar" size={30} color={tintColor} />
      },  
    },
    Feed: {
      screen: FeedMaraudes,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="ios-images" size={30} color={tintColor} />
      },  
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="ios-more" size={30} color={tintColor} />
      },  
    }
  },
  {
    initialRouteName: "Map",
    tabBarOptions: {
      activeBackgroundColor: "#2D2D2D",
      inactiveBackgroundColor: "#2D2D2D",
      activeTintColor: "#FDC500",
      showLabel: false
    },
  },
);

const AppStack = createStackNavigator(
  {
    Profile: { screen: Profile }
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
    },
    {
      initialRouteName: "Tab"
    }
  )
);
