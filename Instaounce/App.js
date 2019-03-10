
import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import config from "./config"
import {PostFeed} from "./Src/Components/Container"
import Instaounce from "./Src/Instaounce";
import {Post} from "./Src/Components/Presentation"

export default class App extends Component {



    render() {
        return (
            <View style={styles.container} >
                <Instaounce/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    topBar: {
        width: "100%",
        height: 70,
        backgroundColor: "rgb(246, 246, 246)",
        borderBottomColor: "rgb(200, 200, 200)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    topLogo: {
        color: "rgb(0,0,0)",
        fontSize: 36,
        fontFamily: "Stembase"
    },
    userBar: {
        width: "100%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        marginHorizontal: 10,
        paddingHorizontal: 10,

        justifyContent: "space-between"
    },
    topBarProfilePicture: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginHorizontal: 10

    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: "100%",
        borderColor: "rgb(200, 200, 200)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 5
    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: "100%",
        borderColor: "rgb(200, 200, 200)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5
    },
    feedText: {
        color: "rgb(0, 0, 0)",
        fontSize: 16,

    }
});
