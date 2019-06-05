import React from 'react';
import { Button,View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';



export default class ImagePickerExample extends React.Component {

    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)
        console.log(permissions, status);
        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            console.log(permissions, 'SUCCESS', image);
        }
    }
    
    pickFromCamera = async () => {
        const permissions = Permissions.CAMERA;
        const { status } = await Permissions.askAsync(permissions);

        console.log(permissions, status);
        if (status === 'granted') {
            let image = await ImagePicker.launchCameraAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            console.log(permissions, 'SUCCESS', image);
        }
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this.pickFromGallery}
                />

            </View>
        );
    }


}