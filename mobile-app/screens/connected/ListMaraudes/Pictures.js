import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import { View } from 'react-native';

export default class AvatarUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: []
        }
    }

    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)
        console.log(permissions, status);
        if (status === 'granted') {
	    const {pictures} = this.state;
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
	    pictures.push(image)
            this.setState({ pictures: [...pictures] })
        }
    }


    render() {
        return (
            <View>
                <Avatar
                    onPress={this.pickFromGallery}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    showEditButton
                    size="large"
                    source={this.state.avatar}
                />
            </View>
        )
    }
}