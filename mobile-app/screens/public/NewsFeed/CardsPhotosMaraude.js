import React, { Component } from 'react'
import { ScrollView, View, Text, Dimensions, StyleSheet } from "react-native";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import PhotoMaraude from './PhotoMaraude';
import { Card, CardItem, Left, Body } from 'native-base';
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
                  <CardItem>
                    <Body style={style.body}>
                      <Left />
                      <Text style={style.title}>{maraude.title}</Text>
                      <Text style={style.city}>{`${maraude.city}${moment(maraude.startAt).format("DD/MM/YYYY")}`}</Text>
                    </Body>
                  </CardItem>
                  <ScrollView horizontal>
                    {
                      maraude.photos.map((photo, index) => {
                        return (
                          <PhotoMaraude
                            key={`photo-${index}`}
                            photo={photo}
                            title={maraude.title}
                            description={maraude.description}
                            city={maraude.city}
                            startAt={maraude.startAt}
                            index={index}
                          />
                        );
                      })
                    }
                  </ScrollView>
                  <CardItem >
                    <Body>
                      <Text style={style.description}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        {maraude.description}
                      </Text>
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
    fontSize: 21,
    fontFamily: 'Tinos',
    marginLeft: -10,
    marginTop: -10
  },
  title: {
    fontFamily: 'Sedgwick',
    fontSize: 23,
    textAlign: 'left',
    marginLeft: -10
  },
  card: {
    marginBottom: 60,
    borderRadius: 0,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    marginLeft: 0,
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  },
  cardItem: {
    display: 'flex',
    width: deviceWidth
  },
  body: {
    height: 60,
    justifyContent: 'flex-start',
    paddingBottom: 30,

  },
  city: {
    fontFamily: 'Sedgwick',
    fontSize: 19,
    marginLeft: -10
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

