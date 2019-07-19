import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Uploader from './Uploader';

export default class MaraudePictures extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maraudeId: null
    }
  }


  componentDidMount() {
    const maraudeId = this.props.navigation.getParam('maraudeId')
    this.setState({ maraudeId })
  }

  render() {
    return (
      <View>
        <Uploader maraudeId={this.state.maraudeId} />
      </View>
    )
  }
}
