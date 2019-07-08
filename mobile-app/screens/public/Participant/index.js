import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { showParticipant, createParticipant } from '../../../store/actions/participant'
import ParticipForm from './ParticipForm';
import { connect } from 'react-redux';

export class Participant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            participants: [],
            selectedMaraudeId: null
        };
    }
    componentDidMount() {
        this.setState({ selectedMaraudeId: this.props.navigation.state.params.maraudeId })
    }
    render() {
        return (
            <ScrollView style={styles.main_container}>
                <ParticipForm navigation={this.props.navigation} maraudeId={this.state.selectedMaraudeId} />
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

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    showParticipant,
    createParticipant
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Participant);