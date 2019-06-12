import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Video } from 'expo';


export default class Discover extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.backgroundApp}>
                    <View style={styles.flexCenterImg}>
                        <Image
                            source={require('./ImagesVideo/Logo_light.png')}
                        />
                    </View>
                    <View style={styles.flexCenter}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.whiteTextTitle}>DES ARTISANS QUI SE</Text>
                            <Text style={styles.yellowText}> MOBILISENT</Text>
                            < Text style={styles.whiteTextTitle}> !</Text>
                        </View>
                        <Text style={{ fontSize: 18, marginTop: 30, color: 'white', fontWeight: 'bold' }}>COMPRENDRE NOTRE ACTION</Text>
                        <Image style={{ width: 30, height: 60, marginTop: 30 }}
                            source={require('./ImagesVideo/_ionicons_svg_md-arrow-down.png')}
                        />
                        <Text style={styles.whiteTextTitle}>La Vidéo :</Text>
                        <View style={{ borderWidth: 2, borderColor: 'black', }}>
                            <Video

                                source={require('./ImagesVideo/Video.mp4')}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode="contain"
                                shouldPlay={false}
                                style={{ width: 400, height: 280 }}
                                useNativeControls={true}
                            />
                        </View>
                        <Text style={{ fontSize: 18, marginTop: 30, color: 'white', fontWeight: 'bold' }}>ÇA M'INTÈRESSE</Text>
                        <Image style={{ width: 30, height: 60 }}
                            source={require('./ImagesVideo/_ionicons_svg_md-arrow-down.png')}
                        />
                        <TouchableOpacity>
                            <Image style={{ marginTop: 30 }}
                                source={require('./ImagesVideo/Btn_Coiffeur.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigate("Feed")}>
                            <Image style={{ marginTop: 30, marginBottom: 30 }}
                                source={require('./ImagesVideo/Btn_interesting.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#4E4E4E', flex: 1,
    },

    flexCenterImg: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    flexCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteText: {
        color: 'white',
    },
    whiteTextTitle: {
        color: 'white',
        fontSize: 23,
        fontFamily: "Sedgwick",
    },
    yellowText: {
        color: '#FDC500',
        fontSize: 23,
        fontFamily: "Sedgwick",

    },

});
