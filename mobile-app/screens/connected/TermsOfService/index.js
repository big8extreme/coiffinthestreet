import React, { Component } from 'react'
import { StyleSheet, View, Text, WebView } from 'react-native';
import Axios from 'axios';
import { CheckBox } from 'react-native-elements';

export default class TermsOfService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis placerat leo, et porta nunc finibus sed. Curabitur non nisi sollicitudin, imperdiet quam et, rhoncus enim. Donec nec imperdiet metus, quis elementum lacus. Nam dolor est, eleifend ut vestibulum nec, lobortis sed mauris. Phasellus sed laoreet purus, sed luctus turpis. Nullam sit amet volutpat nulla. Nulla molestie, tortor vitae commodo maximus, orci sapien mattis nunc, nec sodales velit lectus vel est. Curabitur dapibus sapien placerat pretium consectetur. Quisque nunc turpis, interdum vel consequat id, elementum quis libero.In sed nunc fringilla, sagittis enim nec, volutpat tortor. Quisque aliquet mauris vitae nisi faucibus, ac laoreet libero molestie. In gravida diam nibh, nec aliquet nisl facilisis sed. Pellentesque eget tristique purus. Nullam ullamcorper nibh tempus elit venenatis dignissim. Vestibulum porttitor nunc id risus suscipit, vel dignissim ante vehicula. Sed vitae felis et arcu elementum tincidunt. Aenean imperdiet rhoncus tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc porta varius sem, et pulvinar augue tristique eget. Fusce et ullamcorper ipsum, id mattis metus.Vivamus sed volutpat urna, eget tempus nisl. Morbi maximus sodales justo, id aliquam justo condimentum egestas. Nulla in blandit purus. Nulla nec dui a eros tempor feugiat. Phasellus ut consequat justo, eu tempor enim. Morbi suscipit, justo convallis dignissim porttitor, nibh magna rutrum orci, vel ultrices libero neque at mi. Aenean maximus massa risus, at dictum arcu fringilla eu. Praesent in metus nec lacus vulputate blandit id id enim.",
            check: false,
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

    changeCheck = () => {
      this.setState({ check: !this.state.check });
    }

    render() {
        return (
            <View style={styles.backgroundApp}>
                <Text style={styles.Titletext}>CONDITIONS GENERALES D'UTILISATIONS</Text>

                <Text style={styles.textCgu}>
                    {/* {JSON.stringify(this.state)} */}
                    {this.state.text}
                    
                </Text>
                <CheckBox 
                    title="J'ai lu et J'accepte"
                    onPress={this.changeCheck}
                    checked={this.state.check}
                    
                />
            </View>
        )
    }
}

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
    textCgu: {
        color: 'white',
        fontSize: 15,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 15,
        marginTop: 15,
        textAlign: 'justify',
    },
});