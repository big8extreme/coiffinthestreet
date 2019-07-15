import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
// import { ImagePicker, Permissions } from 'expo';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { View } from 'react-native';
import { UploadPictures } from '../../../store/actions/pictures'
import { connect } from 'react-redux'

export class AvatarUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: []
        }
    }

    pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions)

        if (status === 'granted') {
        const {pictures} = this.state;
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => {
                console.log("ERRROR GETTING IMAGE")
                console.log(permissions, { error })
            });

            pictures.push(image)

            this.setState({ pictures: [...pictures] });
            // this.props.UploadPictures(this.props.maraudeId, this.state.pictures)

            this.props.UploadPictures(this.props.maraudeId, image)

            //call redux action ==> send picture to server and reload maraude

        }else {
            console.log('error during ', permissions, status);
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

const mapStateToProps = (state) => ({
    ...state
  })

const mapDispatchToProps = {
    UploadPictures
  }

  // @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);