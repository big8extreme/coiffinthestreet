import React from 'react';
import { createBottomTabNavigator, DrawerActions } from "react-navigation";
import MapMaraudes from "../screens/connected/MapMaraudes";
import NewsFeed from "../screens/public/NewsFeed/Index";
import ListMaraudes from "../screens/connected/ListMaraudes";
import Icon from "react-native-vector-icons/Ionicons";


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
    screen: NewsFeed,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ios-images" size={30} color={tintColor} />
    },
  },
  Menu: {
    screen: MapMaraudes,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => <Icon onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} name="ios-more" size={30} color={tintColor} />
      }
    }
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

export default TabNavFooter;
