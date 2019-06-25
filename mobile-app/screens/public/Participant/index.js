import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {fetchParticipants, showParticipant} from '../../../store/actions/participant'
import ParticipForm from './ParticipForm';
import { connect } from 'react-redux';

export class Participant extends Component {

    constructor(props) {
            console.log('constructor')

        super(props);
        this.state = {
            
            participants :[console.log('participantsarray')]
            
        };
    }

    componentDidMount() {
            console.log('componentDidMount')

        this.props.fetchParticipants(console.log("fetch"));
    }

    render() {
        console.log('RRR')
        return (
            <ScrollView style={styles.main_container}>
                {this.props.participant.participants.map((participant, index) => {
                    return (
                        <ParticipForm key={index} participant={participant} />
                    );
                    })}
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
    showParticipant
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Participant);