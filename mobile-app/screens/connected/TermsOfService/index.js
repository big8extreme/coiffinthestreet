import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, SafeAreaView } from 'react-native';
import { fetchConfigs } from '../../../store/actions/config'
import GlobalFooter from '../../../components/GlobalFooter';

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

  render() {
    return (
      <View style={styles.backgroundApp}>
        <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
        <Text style={styles.Titletext}>CONDITIONS GENERALES D'UTILISATION</Text>
        <ScrollView>
          <Text style={styles.textCgu}>{this.props.config.cgu}</Text>
        </ScrollView>
        <GlobalFooter />
      </View>
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