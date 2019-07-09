import React, { Component } from 'react'
import { ScrollView } from "react-native";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import PhotoMaraude from './PhotoMaraude';




class CardsPhotosMaraude extends Component {

  componentDidMount() {
    this.props.fetchMaraudes();
  }
  render() {

    return (
      <ScrollView>
        {
<<<<<<< HEAD
          this.props.maraude.maraudes.map((maraude) => {
            return <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
                    
=======
          this.props.maraude.maraudes.map((maraude, idx) => {
            return <ScrollView
              key={`maraude-${idx}`}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}>

>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
              {

                maraude.photos.map((photo, index, title) => {

                  return (
<<<<<<< HEAD
                    <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
                    <PhotoMaraude
                    key={index}                   
                    photo={photo}
                    title={maraude.title}
                    description={maraude.description}  
                    city={maraude.city}  
                    startAt={maraude.startAt}                               
                    />
                    
=======
                    <ScrollView
                      key={`photo-${index}`}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}>
                      <PhotoMaraude
                        photo={photo}
                        title={maraude.title}
                        description={maraude.description}
                        city={maraude.city}
                        createdAt={maraude.createdAt}
                        index={index}
                      />

>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
                    </ScrollView>
                  );
                })
              }
            </ScrollView>

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

