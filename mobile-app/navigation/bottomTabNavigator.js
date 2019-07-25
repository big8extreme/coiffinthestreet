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
      tabBarIcon: ({ tintColor }) => <Icon name="ios-globe" size={30} color={tintColor} />
    },
  },
  List: {
    screen: ListMaraudes,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list-box" size={30} color={tintColor} />
    },
  },
  Feed: {
    screen: NewsFeed,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="ios-images" size={30} color={tintColor} />
    },
  },
  Menu: {
    screen: ListMaraudes,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => <Icon onPress={() => { navigation.dispatch(DrawerActions.openDrawer()) }} name="ios-menu" size={30} color={tintColor} />
      }
    }
  }
},
  {
    initialRouteName: "Map",
    tabBarOptions: {
      activeTintColor: "#FDC500",
      showLabel: false,
      style: {
        backgroundColor: "black",
        height: 60
      }
    },
  },
);

export default TabNavFooter;
