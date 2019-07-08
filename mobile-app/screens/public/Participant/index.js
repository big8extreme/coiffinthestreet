import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {fetchParticipants, showParticipant, createParticipant} from '../../../store/actions/participant'
import ParticipForm from './ParticipForm';
import { connect } from 'react-redux';

export class Participant extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            participants :[]            
        };
    }
    componentDidMount() {
        this.props.fetchParticipants();
    }
    render() {
        return (
            <ScrollView style={styles.main_container}>
                <ParticipForm 
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

const mapStateToProps =state => ({
    ...state
});

const mapDispatchToProps = {
    fetchParticipants,
    showParticipant,
    createParticipant
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Participant);