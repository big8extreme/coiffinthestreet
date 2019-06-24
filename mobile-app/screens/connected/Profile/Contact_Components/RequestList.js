import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, Alert } from "react-native";

export default class RequestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                { key: 'Problème technique' },
                { key: 'Problème avec un participant' },
                { key: 'Autre' },
            ]
        };
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
        );
    };
    GetItem(item) {
        Alert.alert("Vous avez sélectionné " + item);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.RequestTitle}>Nature de la requête</Text>
                
                <View style={styles.FlatList_container} >
                    <FlatList
                        data={this.state.FlatListItems}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    RequestTitle: {
        fontSize: 18,
        color: '#F1F0C7',
        margin: 11,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    FlatList_container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#FDC500',
        borderRadius: 10,
        padding: 10,
        width: '90%',
        marginLeft: 11,
    },
    item: {
        padding: 10,
        fontFamily: 'Roboto',
        height: 45,
    }
});

