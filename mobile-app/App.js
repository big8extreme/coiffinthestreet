import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistor from './store/persistor';
import StackNavigator from './navigation/StackNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
