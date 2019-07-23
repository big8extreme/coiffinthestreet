import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { showParticipant, createParticipant } from '../../../store/actions/participant';
import ParticipForm from './ParticipForm';
import { connect } from 'react-redux';
import {Root} from 'native-base';
import GlobalFooter from '../../../components/GlobalFooter';

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
        <Root> 
          <ParticipForm navigation={this.props.navigation} maraudeId={this.state.selectedMaraudeId} />
          <GlobalFooter/>
        </Root>
        )
    }
}

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