import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';


export default class NewsFeed extends Component {
    render() {
        return (
            <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{ padding: 15, alignItems: 'center'}}>
            <View style={{alignItems: 'center', justifyContent: 'center', height:100 }}>
                
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        Sign in with Facebook
              </Text>
                
            </View>
            </LinearGradient>
        );
    }
}


