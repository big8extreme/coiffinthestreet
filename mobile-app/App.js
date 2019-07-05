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
    if (this.state.loading) {
      return <Text>Loading ...</Text>;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{ flex: 0, backgroundColor: '#FBFBFB' }} />
            <StackNavigator style={{ flex: 1, backgroundColor:'red', height: 10}} />
        </PersistGate>
      </Provider>
    );
  }
}
