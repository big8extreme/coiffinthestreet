import React, { Component } from 'react';
import '../App.css';
import List from '../components/contents/Liste';
import Code from '../components/contents/Code';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <React.Fragment>

        <List />
        <Code />

      </React.Fragment>

    );
  }
}