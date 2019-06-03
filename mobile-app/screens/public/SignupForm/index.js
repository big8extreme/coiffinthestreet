import React, { Component } from 'react';
import {Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Input, Item } from 'native-base';



export default class SignupForm extends Component {
    render() {
        return (
            <ScrollView style={style.scrollview}>

                <Avatar
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    showEditButton
                    size="large"
                />
               

                    <Text style={style.text}>Nom</Text>                   
                    <Item
                        regular
                        style={style.input}>
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
                        style={style.input}>
                        <Input />
                    </Item>

                    <Text style={style.text}>Mot de passe</Text>
                    <Item
                        regular
                        style={style.input}>
                        <Input />
                    </Item>

                    <Text style={style.text}>Confirmer le mot de passe</Text>
                    <Item
                        regular
                        style={style.input}>
                        <Input />
                    </Item>

                    <Text style={style.text}>Ville</Text>
                    <Item
                        regular
                        style={style.input}>
                        <Input />
                    </Item>
                


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
        borderWidth: 2,
        borderColor: '#FDC500',
        marginBottom: 10,
        marginLeft:10,
        width: 300,
        borderRadius:5
        
    },
    scrollview: {
       backgroundColor:'grey'
    },
    text:{
        fontFamily:'Georgia',
        textAlign:'left',
        marginLeft:10,
        marginBottom:5
    }
}