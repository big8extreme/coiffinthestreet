import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchConfigs } from '../../../store/actions/config'
import { ListItem } from 'react-native-elements'

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
        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },

          ]
        return (
            <React.Fragment>



                <View style={styles.backgroundApp}>
                    <Text style={styles.Titletext}>Qui Sommes Nous</Text>
                </View >

                <View style={styles.background}>
<Card title="Fondateur" >
  {
  list.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
    />
  ))
 }
</Card>



<Card title="Bénévoles" >
  {
  list.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
    />
  ))
 }
</Card>

<Card title="developpeur" >
  {
  list.map((l, i) => (
    <ListItem
      key={i}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
    />
  ))
 }
</Card>


</View >

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    fetchConfigs

}

export default connect(mapStateToProps, mapDispatchToProps)(Whoweare);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4E4E4E',

},
    backgroundApp: {
        backgroundColor: '#4E4E4E',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titletext: {
        color: 'white',
        fontSize: 35,
        fontFamily: "Sedgwick",
    }

});