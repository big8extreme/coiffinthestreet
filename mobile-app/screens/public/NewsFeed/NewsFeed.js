import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';

export default class NewsFeed extends Component {
    render() {
        return (
            <View>
               <LinearGradient
        colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
        style={{flex: 1}}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 0, y: 1 }}
      >
        <Text>Hello World</Text>
</LinearGradient>
            </View>
        );
    }

}
