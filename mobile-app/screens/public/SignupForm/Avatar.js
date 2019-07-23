import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import { View } from 'react-native';

export default class AvatarUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar:null
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
            this.setState({ avatar: image })
            this.props.onSelected(image)
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
                    size={100}
                    containerStyle={{alignSelf:'center', flex:1, marginTop:20}}
                    source={this.state.avatar}
                />
            </View>
        )
    }
}


