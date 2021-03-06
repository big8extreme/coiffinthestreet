// @ts-nocheck
import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor from "./store/persistor";
import StackNavigator from "./navigation/StackNavigator";
import * as Font from 'expo-font'
import { Ionicons } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";
import { Text } from "native-base";
import { SafeAreaView } from "react-navigation";
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Sedgwick: require('./assets/fonts/SedgwickAveDisplay-Regular.ttf'),
      Tinos: require('./assets/fonts/Tinos-Regular.ttf'),
      Tinos_bold: require('./assets/fonts/Tinos-Bold.ttf'),
      TinosItalic: require('./assets/fonts/Tinos-Italic.ttf'),
      TinosBoldItalic: require('./assets/fonts/Tinos-BoldItalic.ttf'),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  render() {
    console.log("LAALLALAL", Constants.platform)
    if (this.state.loading) {
      return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chargement ...</Text>
      </View>
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar hidden />
          <StackNavigator style={{ flex: 1 }} />
        </PersistGate>
      </Provider>
    );
  }
}
