import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, View } from "native-base";

export default class PickerTextAndItemStyleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            
                <Content >
                    <Form>
                        <Picker 
                            mode="dropdown"
                            placeholder="Objet"
                            iosIcon={<Icon name="arrow-down" style={{color:'rgb(253,197,0)', marginLeft:0}}/>}
                            placeholder="Objet"
                            textStyle={{ color: 'rgb(253,197,0)' }}
                            itemStyle={{
                                backgroundColor: "white",
                                marginLeft: 0,
                                paddingLeft: 10,

                               
                            }}
                            itemTextStyle={{ color:'black' }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            style={style.dropdown}
                        > 
                            <Picker.Item label="Problème technique" value="key0" style={{backgroundColor:'yellow'}}/>
                            <Picker.Item label="Problème avec un participant" value="key1" />
                            <Picker.Item label="Problème avec un sans-abris" value="key2" />
                            <Picker.Item label="Message de soutien" value="key3" />
                            <Picker.Item label="Autre" value="key4" />
                            
                        </Picker>
                    </Form>
                </Content>
           
        );
    }
}

const style = {
    dropdown: {
        width:300,
        color:'rgb(253,197,0)',
        borderWidth:2, 
        borderColor:'rgb(253,197,0)',
        alignSelf:'center',
        marginTop:50,
        marginBottom:30,
        fontWeight:900,
        
    },
    
}