import React, { Component } from "react";
import { ScrollView } from "react-native";
import CardMaraude from './CardMaraude';
import { View } from "native-base";
import { connect } from 'react-redux'
import PicturesUpload from './Pictures'


class CardsMaraudes extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FBFBFB" }}>
        {this.props.maraudes.map((maraude, index) => {
          return (
            <View key={index} style={{ backgroundColor: '#FBFBFB' }}>
              <PicturesUpload onSelected={(file) => this.setState({pictures: file})} maraudeId={maraude.id} />
              <CardMaraude maraude={maraude} navigation={this.props.navigation} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({

  maraudes: state.maraude.maraudes
});

const mapDispatchToProps = {}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CardsMaraudes);
