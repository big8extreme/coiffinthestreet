import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Axios from 'axios';
import { Provider } from 'react-redux';
import store from '../../../store';
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'
import GlobalFooter from '../../../components/GlobalFooter';

class LegalMentions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: null
    };
  }
  componentDidMount() {
    this.props.fetchConfigs();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.backgroundApp}>
          <Text style={styles.Titletext}>Mentions légales</Text>
          <ScrollView>
            <Text style={styles.textLegal}>{this.props.config.legalMention}</Text>
          </ScrollView>
        </View>
        <GlobalFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LegalMentions);

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
    justifyContent: 'center',
  },
  textLegal: {
    color: 'white',
    fontSize: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center',
  },
});
