import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../../store';
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'

export class LegalMentions extends Component {
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
          <Text style={styles.Titletext}>Mentions légales</Text>
          <Text style={styles.textLegalMentions}>{this.props.config.LegalMentions}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(charte);

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
    fontFamily: "Sedgwick",
    textAlign: "center"
  },
  textLegalMentions: {
    color: 'white',
    fontSize: 15,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'justify',
  },
});