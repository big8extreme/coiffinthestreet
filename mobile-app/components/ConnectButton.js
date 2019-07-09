import React, { Component } from "react";
import { Svg } from "expo";
import { TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';



class ConnectButton extends React.Component {

    render() {
        const { onPress, label } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity onPress={onPress}>
                <Svg
                    height={100}
                    width={350}
                    marginLeft={35}
                >
                    <Path
                        d="M43.2791592,3.5 C40.0544477,3.5 37.1074306,5.32478241 35.6701474,8.21147275 L11.5481664,56.6589108 C10.9922563,57.7754201 10.6888692,59.0005889 10.6595302,60.2474924 C10.5491032,64.9406138 14.2641111,68.8346591 18.9572325,68.945086 L287.216538,75.2571015 C291.432985,75.3563125 295.084493,72.3487197 295.795003,68.1913844 L305.153668,13.4319309 C305.234511,12.9589056 305.27515,12.4798838 305.27515,12 C305.27515,7.30557963 301.46957,3.5 296.77515,3.5 L43.2791592,3.5 Z"
                        fill="#FDC500"
                        stroke="#FFF"
                        strokeWidth="6"
                    />
                </Svg>
                <Text style={style.btnStyle}>Se connecter</Text>
            </TouchableOpacity>
        );
    }
}
const style = {
    btnStyle: {
        fontFamily:'Sedgwick',
        color:'#2D2D2D',
        fontSize:35,
        position:'absolute',
        alignSelf:'center',
        marginTop:20,
        
    }
}




export default withNavigation(ConnectButton);
