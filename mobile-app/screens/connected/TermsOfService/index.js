import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Axios from 'axios';
import { Provider } from 'react-redux';
import store from '../../../store';
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'

export class TermsOfService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null
    };
  }
  componentDidMount() {
    this.props.fetchConfigs();

  }

  // static propTypes = {
  //     prop: PropTypes
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.backgroundApp}>
          <Text style={styles.Titletext}>CONDITIONS GENERALES D'UTILISATION</Text>
          <ScrollView>
            <Text style={styles.textCgu}>{this.props.config.cgu}</Text>
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  config: state.config.currentConfig
})

const mapDispatchToProps = {
  fetchConfigs

}

export default connect(mapStateToProps, mapDispatchToProps)(TermsOfService);

const styles = StyleSheet.create({
  backgroundApp: {
    backgroundColor: '#2D2D2D', flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Titletext: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    fontFamily: "Sedgwick",
    textAlign: "center"
  },
  textCgu: {
    color: 'white',
    fontSize: 15,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center',
  },
});