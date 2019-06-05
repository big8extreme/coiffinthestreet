import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Input, Item, Button, Icon } from 'native-base';
import { ImagePicker, Permissions } from 'expo';



export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {         
                avatar: null,
                password:true,
                
        }
    }
    
    
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
            this.setState({avatar: image})
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
                   
                    <Input secureTextEntry={true} />
                    
                </Item>

                <Text style={style.text}>Confirmer le mot de passe</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input secureTextEntry={true}/>
                </Item>

                <Text style={style.text}>Ville</Text>
                <Item
                    regular
                    style={style.input}>
                    <Input />
                </Item>
                <Button block
                    style={{ 
                    backgroundColor: '#112249', 
                    width:270,
                    marginBottom:20,
                    justifyContent:'center' }}>
                    <Text style={{ color: 'white' }}>Valider</Text>
                </Button>
                <Button block
                    style={{ backgroundColor: '#D73A3A' }}>
                    <Text style={{ color: 'white' }}>Supprimer mon compte</Text>
                </Button>
                
    </ScrollView>
        )
    }
}
_pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
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
    }
}