import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import MapMaraudes from "../screens/connected/MapMaraudes";
import FeedMaraudes from "../screens/connected/FeedMaraudes";
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
    screen: FeedMaraudes,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ios-images" size={30} color={tintColor} />
    },
  },
  Menu: {
    screen: MapMaraudes,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: ({ tintColor }) => <Icon onPress={() => {navigation.toggleDrawer()}} name="ios-more" size={30} color={tintColor} />
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
