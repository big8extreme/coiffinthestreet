import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, CheckBox } from 'react-native-elements';
import { Input, Item, Container } from 'native-base';
import { ImagePicker, Permissions } from 'expo';






export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            password: '',
            email: '',
            one: false,
            two: false,

        }

    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    onePressed() {
        this.setState({ one: true, two: false })
    }
    twoPressed() {
        this.setState({ one: false, two: true })
    }



    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)
        console.log(permissions, status);
        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
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


                <Text style={style.text}>Nom *</Text>
                <Item
                    regular
                    style={style.input}
                >
                    <Input />
                </Item>

                <Text style={style.text}>Prénom *</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>

                <Text style={style.text}>Pseudo *</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>

                <Text style={style.text}>Code de parrainage *</Text>
                <Container style={style.container}>
                    <CheckBox
                        checked={this.state.one}
                        onPress={() => this.onePressed()}
                        checkedColor='#FDC500'
                        textStyle={{
                            fontFamily: 'Georgia'
                        }} />
                    <Text>Oui</Text>
                </Container>


                <Container style={style.container}>
                    <CheckBox
                        checked={this.state.two}
                        onPress={() => this.twoPressed()}
                        checkedColor='#FDC500'
                        textStyle={{
                            fontFamily: 'Georgia'
                        }} />
                    <Text>Non, je n'ai pas de parrain</Text>
                </Container>

                <Text style={style.text}>Entrez votre code de parrainage *</Text>
                <Item
                    regular
                    style={style.input}
                >
                    <Input />
                </Item>

                <Text style={style.text}>E-mail *</Text>
                <Item
                    regular
                    style={style.input}
                    value={this.state.email}
                    name='email'
                >
                    <Input />
                </Item>

                <Text style={style.text}>Mot de passe *</Text>
                <Item
                    regular
                    style={style.input}
                    value={this.state.password}
                    name='password'
                    onChange={this.handleChange}>
                    <Input
                        secureTextEntry={true}
                    />
                </Item>

                <Text style={style.text}>Confirmer le mot de passe *</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input secureTextEntry={true} />
                </Item>

                <Text style={style.text}>Ville *</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>


                <TouchableOpacity>
                    <Image source={require('../../../assets/Btn_Valider.png')}
                        style={style.BtnValidate}
                        type="submit"
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
        marginTop: 15,
        fontWeight:'bold'
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
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    }
}