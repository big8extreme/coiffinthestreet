import React, { Component } from 'react'
import { ScrollView, View, Text } from "react-native";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import PhotoMaraude from './PhotoMaraude';

class CardsPhotosMaraude extends Component {
  

  componentDidMount() {
    this.props.fetchMaraudes();
  }
  render() {
    console.log("HEELELELELEL", JSON.stringify(this.props))
    return (
      <ScrollView>
        {
          this.props.maraude.maraudes.map((maraude) => {
            return <View>
              {
                maraude.photos.map((photo, index) => {
                  
                  return (
                    <PhotoMaraude 
                    key={index} 
                   
                    photo={photo}
                    />

                  );
                })
              }

            </View>
          })
        }
        
      </ScrollView>
    )
  }
}

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

