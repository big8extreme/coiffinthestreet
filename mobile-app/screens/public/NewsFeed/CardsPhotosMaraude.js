import React, { Component } from 'react'
import { ScrollView, View, Text, Dimensions, StyleSheet, Image } from "react-native";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import PhotoMaraude from './PhotoMaraude';
import { Card, CardItem, Body } from 'native-base';
import moment from "moment";


let deviceWidth = Dimensions.get('window').width

class CardsPhotosMaraude extends Component {

  componentDidMount() {
    this.props.fetchMaraudes();
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.maraude.maraudes.map((maraude, idx) => {
            return <View
              key={`maraude-${idx}`}>
              <View>
                <Card style={style.card}>
                  <CardItem style={{ paddingLeft: 5, alignItems: 'center' }}>
                    <Body style={style.body}>
                      <View>
                        <Image source={{ uri: maraude.author.avatarUrl }} style={style.avatar} />
                      </View>
                      <View style={{ display: 'flex', justifyContent: 'center' }}>
                        <Text style={style.title}>{maraude.title}</Text>
                        <Text style={style.city}>{`${maraude.city}${moment(maraude.startAt).format(" DD/MM/YYYY")}`}</Text>
                      </View>
                    </Body>
                  </CardItem>
                  <ScrollView horizontal>
                    {
                      maraude.photos.map((photo, index) => {
                        return (
                          <PhotoMaraude
                            key={`photo-${index}`}
                            photo={photo}
                          />
                        );
                      })
                    }
                  </ScrollView>
                  <CardItem style={{ paddingLeft: 5, paddingTop: 15 }}>
                    <Body>
                      <Text style={style.description}>{maraude.description}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            </View>
          })
        }
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({

  description: {
    fontSize: 19,
    fontFamily: 'Tinos',
  },
  title: {
    fontFamily: 'Tinos_bold',
    fontSize: 23,
    marginBottom: 3
  },
  card: {
    marginBottom: 60,
    borderRadius: 0,
    width: deviceWidth,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
  cardItem: {
    display: 'flex',
    width: deviceWidth
  },
  city: {
    fontFamily: 'Tinos_bold',
    fontSize: 17,
    marginTop: 3

  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 30,
    borderColor: 'black',
    borderWidth: 1
  }
})


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  fetchMaraudes,

};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPhotosMaraude);

