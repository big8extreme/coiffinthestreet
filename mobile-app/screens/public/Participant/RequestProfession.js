// import { StyleSheet, FlatList, Text, View, Alert } from "react-native";
// import React, { Component } from 'react';

// export default class RequestProfession extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             FlatListItems: [
//                 { key: 'Coiffeur' },
//                 // { key: 'Photographe' },
//                 // { key: 'Esthéticien(ne)' },
//             ]
            
//         };
//     }
//     FlatListItemSeparator = () => {
//         return (
//             <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
//         );
//     };
//     GetItem(item) {
//         Alert.alert("Vous avez sélectionné " + item);
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.RequestTitle}>Profession :</Text>

//                 <View style={styles.FlatList_container} >
//                     <FlatList
                        
//                         keyExtractor={(item, index) => item.key}
//                         data={this.state.FlatListItems}
//                         ItemSeparatorComponent={this.FlatListItemSeparator}
//                         render Item={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     RequestTitle: {
//         fontSize: 18,
//         margin: 11,
//         fontWeight: 'bold',
//         fontFamily: 'Georgia',
//     },
//     FlatList_container: {
//         backgroundColor: 'white',
//         borderWidth: 2,
//         borderColor: '#FDC500',
//         borderRadius: 10,
//         padding: 10,
//         width: '90%',
//         marginLeft: 11,
//     },
//     item: {
//         padding: 10,
//         fontFamily: 'Georgia',
//         height: 45,
//     }
// });