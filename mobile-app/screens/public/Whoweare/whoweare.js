import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'

export class Whoweare extends Component {
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
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },

        ]
        return (
            <React.Fragment>
                <View style={styles.backgroundApp}>
                    <Text style={styles.Titletext}>Qui Sommes Nous</Text>

                </View>
                <Card title="CARD WITH DIVIDER">
                    {
                        users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }} />
                                    <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })
                    }
                </Card>
                <Card title='HELLO WORLD' >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    fetchConfigs
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Whoweare);

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: "#4E4E4E",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    Titletext: {
        color: "white",
        fontSize: 35,
        fontFamily: "Sedgwick",
        flex: 2
    },
    image: {
        height: 120,
        width: 220,
        padding: 5,
    }
});
