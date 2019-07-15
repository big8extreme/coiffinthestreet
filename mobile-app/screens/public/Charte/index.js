import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'
import GlobalFooter from '../../../components/GlobalFooter';

export class Charte extends Component {
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
      <View style={{flex: 1, backgroundColor: '#2D2D2D'}} >
        <ScrollView>
            <Text style={styles.Titletext}>Charte d'utilisateur</Text>
            <Text style={styles.textCharte}>{this.props.config.charte}</Text>
        </ScrollView>
        <GlobalFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Charte);

const styles = StyleSheet.create({
  Titletext: {
    color: 'white',
    fontSize: 35,
    fontFamily: "Sedgwick",
    alignSelf: 'center',
  },
  textCharte: {
    color: 'white',
    fontSize: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 15,
  },
});