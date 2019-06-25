import React from 'react';
import { createBottomTabNavigator, DrawerActions } from "react-navigation";
import MapMaraudes from "../screens/connected/MapMaraudes";
import FeedMaraudes from "../screens/connected/FeedMaraudes";
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
    screen: FeedMaraudes,
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
    initialRouteName: "List",
    tabBarOptions: {
      activeTintColor: "#FDC500",
      showLabel: false,
      style: {
        backgroundColor: "#2D2D2D",
        padding: 10
      }
    },
  },
);

export default TabNavFooter;
