import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, View } from "native-base";
import LinearGradient from 'expo';



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
                            iosIcon={<Icon name="arrow-down" style={{ color: 'rgb(241,240,199)', marginLeft: 0 }} />}
                            placeholder="Objet"
                            placeholderStyle={{ fontFamily: 'Tinos_bold', paddingLeft: 14, fontSize: 19 }}
                            textStyle={{ color: 'rgb(241,240,199)' }}
                            itemStyle={{
                                backgroundColor: "white",
                                marginLeft: 0,
                                paddingLeft: 10,
                            }}
                            itemTextStyle={{ color: 'black' }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                            style={style.dropdown}
                        >

                            <Picker.Item label="Problème technique" value="key0" />
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
        width: 300,
        color: 'rgb(241,240,199)',
        borderWidth: 2,
        borderColor: 'rgb(241,240,199)',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
        fontSize: 18,
        fontFamily: 'Tinos_bold',
    }
}