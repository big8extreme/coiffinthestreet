import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
// import { style } from '../../assets/style';



const CustomButton = ({ label='', navigation = {}, screen = "",  labelColor = '#fff', color = '#87C85f', onPressFunc=null }) => {
  
  handlePress =()=>{
    if (typeof onPressFunc === "function"){
    onPressFunc()
  }else{
      navigation.navigate(screen)
    }
    
  }
  return (
    <TouchableOpacity  onPress={()=>handlePress() }
    style={{ ...style.btnValidate, backgroundColor: color, alignSelf:'center', bottom: 0}}
    activeOpacity={1}>
      <View>
          <Text style={{ ...style.text, color: labelColor, fontSize: 20, fontWeight: 'bold', textAlign:'center' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default CustomButton
