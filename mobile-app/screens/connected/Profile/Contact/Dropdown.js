import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, View } from "native-base";
import LinearGradient from 'expo';



const subjects = [
    'Problème technique',
    'Problème avec un participant',
    'Problème avec un sans-abris',
    'Message de soutien',
    'Autre'
]

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
<<<<<<< HEAD
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
=======
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" style={{ color: 'rgb(253,197,0)', marginLeft: 0 }} />}
                        placeholder="Objet"
                        placeholderStyle={{ fontWeight: 'bold', paddingLeft: 14 }}
                        textStyle={{ color: 'rgb(253,197,0)' }}
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
                        {
                            subjects.map((subject, idx) => {
                                return <Picker.Item label={subject} value={subject} key={`subject-${idx}`} />
                            })
                        }

                    </Picker>
>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
                </Form>
            </Content>

        );
    }
}

const style = {
    dropdown: {
        width: 300,
<<<<<<< HEAD
        color: 'rgb(241,240,199)',
        borderWidth: 2,
        borderColor: 'rgb(241,240,199)',
=======
        color: 'rgb(253,197,0)',
        borderWidth: 2,
        borderColor: 'rgb(253,197,0)',
>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
        fontSize: 18,
<<<<<<< HEAD
        fontFamily: 'Tinos_bold',
    }
=======
        fontWeight: 'bold'
    },

>>>>>>> 70ddc7bea970fd9ab2bd8c33a7fef77ccadd24d2
}