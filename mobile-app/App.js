// @ts-nocheck
import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor from "./store/persistor";
import StackNavigator from "./navigation/StackNavigator";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "native-base";
import { SafeAreaView } from "react-navigation";

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
      Sedgwick: require("./fonts/SedgwickAveDisplay-Regular.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Text>Loading ...</Text>;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }} forceInset={{ bottom: 'never' }}>
            <StackNavigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}
