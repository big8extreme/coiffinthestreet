import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native'
import { Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { uploadPictures } from '../../../store/actions/pictures'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const LIMIT = 5;

export class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            loading: false
        }
    }

    pickFromGallery = async () => {
        if (this.state.pictures.length < LIMIT) {
            const permissions = Permissions.CAMERA_ROLL;
            const { status } = await Permissions.askAsync(permissions)

            if (status === 'granted') {
                let { pictures } = this.state;
                let image = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: 'Images',
                }).catch(error => {
                    console.log("ERROR GETTING IMAGE", error)
                });

                pictures.push(image)

                this.setState({ pictures: [...pictures] });

            } else {
                console.log('error during ', permissions, status);
            }
        } else {
            window.alert('Limite de photos atteinte, veuillez en supprimer')
        }
    }

    uploadPictures = async () => {
        this.setState({ loading: true })
        await this.state.pictures.forEach(picture => {
            this.props.uploadPictures(this.props.maraudeId, picture)
        })
        this.setState({ loading: false })
    }

    deletePictureFormSate = (picture) => {
        Alert.alert(
            "Suppression d'image",
            "Etes vous sur de vouloir supprimer l'image ?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        let { pictures } = this.state;
                        const index = pictures.indexOf(picture);
                        pictures.splice(index, 1)
                        this.setState({ pictures: [...pictures] })
                    }
                },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <View>
                <Button
                    title="Pick image"
                    onPress={this.pickFromGallery}
                />
                <Text>is loading: {JSON.stringify({ loading: this.state.loading })}</Text>
                <Text>iPictures: {this.state.pictures.length}</Text>
                <ScrollView style={{ minHeight: 200 }}>
                    {
                        this.state.pictures.map((picture, idx) => {
                            return <TouchableOpacity key={`picture-${idx}`} onPress={() => this.deletePictureFormSate(picture)}>
                                <Image
                                    style={{ width: 300, height: 100 }}
                                    source={{ uri: picture.uri }} />
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>
                <Button
                    title="Valider les photos"
                    onPress={this.uploadPictures}
                    disabled={this.state.loading}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    maraude: { test: 'ok' }
})

const mapDispatchToProps = {
    uploadPictures
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader)
