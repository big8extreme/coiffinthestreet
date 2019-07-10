import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import {
    Animated,
    Image,
    Easing,
  } from "react-native";
  
  export default class Startapp extends Component {
    constructor(props) {
      super(props);
      this.animatedValue = new Animated.Value(0.5);
      this.animatedValue2 = new Animated.Value(0);
    }
  









export default class Startapp extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (


            <View style={styles.backgroundApp}>
                <View style={styles.flexCenterImg}>
                    <Image
                        source={require('./../LoginForm/Logo_light.png')}
                    />
                </View>
            </View>




        )
    }
};

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#2D2D2D', flex: 1,
    },

    flexCenterImg: {
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 30
    },


});
