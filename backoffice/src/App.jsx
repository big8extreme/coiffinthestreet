import React, { Component } from 'react';
import './App.scss';
import Router from './routes/Router';
import {Provider} from 'react-redux';
import store from './stores';

export default class App extends Component {
  render() {
    return (
      <Provider store ={store} >
    <Router />
    </Provider>
    )
  }
}