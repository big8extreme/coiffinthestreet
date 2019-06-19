

import React from 'react'
import { Text, View } from "native-base";
import { Image, ScrollView } from 'react-native';
import maraude from '../../../store/reducers/maraude';
import { ScrollView } from 'react-native';


export default function PhotoMaraude({ photo }) {
    return (
        

            <ScrollView horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}>
                <Image source={{ uri: `${photo.url}` }}
                    style={{ width: 400, height: 400 }} />
            </ScrollView>
        
    )
}


