import React, { Component } from 'react'
import { ScrollView, View, Text } from "react-native";
import { fetchMaraudes } from "../../../store/actions/maraude";
import { connect } from "react-redux";
import PhotoMaraude from './PhotoMaraude';
import {Container, Content} from 'native-base';



class CardsPhotosMaraude extends Component {
  

  componentDidMount() {
    this.props.fetchMaraudes();
  }
  render() {
  
    return (
      <ScrollView>
      
                    
        {
          this.props.maraude.maraudes.map((maraude) => {
            return <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
              {
                maraude.photos.map((photo, index, title) => {
                  
                  return (
                    
                    <PhotoMaraude 
                    key={index}                   
                    photo={photo}
                    title={maraude.title}
                    description={maraude.description}  
                    city={maraude.city}  
                    createdAt={maraude.createdAt}              
                    />
              
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

