import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Axios from 'axios';
import { Provider } from 'react-redux';
import store from '../../../store';
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'

export class charte extends Component {
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
                    <Text style={styles.Titletext}>Charte d'utilisateur</Text>
                    <Text style={styles.textCharte}>{this.props.config.charte}</Text>
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