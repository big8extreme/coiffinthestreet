import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Input, Item, Form } from 'native-base';
import { ImagePicker, Permissions } from 'expo';





export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            password: '',
            email:''


        }
    }


    isValid = () => {
       const {email, password} = this.state
       return email && password
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
      };


    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)
        console.log(permissions, status);
        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            console.log(permissions, 'SUCCESS', image);
            console.log("ENTER HERERERERREREREREERREERRE", permissions, 'SUCCESS', image);
            console.log("ENTER IMAGESSSSS", image);
            this.setState({ avatar: image })
        }
    }



    render() {

        return (
            <ScrollView style={style.scrollview}>

                <Avatar
                    onPress={this.pickFromGallery}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    showEditButton
                    size="large"
                    source={this.state.avatar}
                />


                <Text style={style.text}>Nom</Text>
                <Item
                    regular
                    style={style.input}
                >
                    <Input />
                </Item>

                <Text style={style.text}>Prénom</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>

                <Text style={style.text}>Age</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>

                <Text style={style.text}>E-mail</Text>
                <Item
                    regular
                    style={style.input}
                    value={this.state.email}
                    name='email'
                    onChange={this.handleChange}
                >
                    <Input
                   
                    />
                </Item>

                <Text style={style.text}>Mot de passe</Text>
                <Item
                    regular
                    style={style.input}
                   
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}

                >
                    <Input
                        secureTextEntry={true}
                    />
                </Item>

                <Text style={style.text}>Confirmer le mot de passe</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input secureTextEntry={true} />
                </Item>

                <Text style={style.text}>Ville</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>


                <TouchableOpacity
                disabled={!this.state.isValid}>
                    <Image source={require('../../../assets/Btn_Valider.png')}
                        style={style.BtnValidate}
                        disabled={!this.state.isValid}
                    />
                </TouchableOpacity>
                
            </ScrollView>
        )
    }
}



const style = {
    title: {
        fontSize: 22,
        marginTop: 15,
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#FDC500',
        marginBottom: 10,
        marginLeft: 10,
        width: 300,
        borderRadius: 5

    },
    text: {
        fontFamily: 'Georgia',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 15
    },
    scrollview: {
        paddingTop: 20
    },
    BtnValidate: {
        marginTop: 30
    },
    BtnDelete: {
        marginBottom: 30,
        marginTop: 20

    }
}