import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Axios from 'axios';

export default class Charte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "test"
        };
    }

    componentDidMount() {
        // Axios.get('http://192.168.1.109:5000/api/v1/users/')
        Axios.get('http://192.168.1.109:5000/api/v1/users', {
            headers: { 'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' }
        })
            .then(res => {
                this.setState({ text: res.data });
            })
            .catch(error => {
                this.setState({ error: error });
            });
    }

    render() {
        return (
            <View style={styles.backgroundApp}>
                <Text style={styles.Titletext}>Charte d'utilisateur</Text>
                
                <Text style={styles.textCharte}>
                    {/* {JSON.stringify(this.state)} */}
                    {this.state.text}
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis placerat leo, et porta nunc finibus sed. Curabitur non nisi sollicitudin, imperdiet quam et, rhoncus enim. Donec nec imperdiet metus, quis elementum lacus. Nam dolor est, eleifend ut vestibulum nec, lobortis sed mauris. Phasellus sed laoreet purus, sed luctus turpis. Nullam sit amet volutpat nulla. Nulla molestie, tortor vitae commodo maximus, orci sapien mattis nunc, nec sodales velit lectus vel est. Curabitur dapibus sapien placerat pretium consectetur. Quisque nunc turpis, interdum vel consequat id, elementum quis libero.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#4E4E4E', flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titletext: {
        color: 'white',
        fontSize: 35,
        fontFamily: "Sedgwick",
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
