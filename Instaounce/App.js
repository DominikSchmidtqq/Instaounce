
import React, {Component} from 'react';
import { Image, Text, StyleSheet, View, Dimensions} from 'react-native';
import config from "./config"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width
        }
    }

    render() {
        const imageURI = "https://sludgefeed.com/wp-content/uploads/2018/09/dogecoin-happy-doge-696x435.jpg"
        return (
            <View style={styles.container} >
                <View style = {{flex: 1, width: 100 + "%", height: 100 + "%"}}/>
                <View style = {styles.topBar}>
                    <Text style = {styles.topLogo}>Instaounce</Text>
                </View>
                <View style = {styles.userBar}>
                <View style = {{flexDirection: "row", alignItems: "center"}}>
                    <Image style = {styles.topBarProfilePicture} source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lil_Pump%27s_mugshot.jpg/220px-Lil_Pump%27s_mugshot.jpg"}}/>
                    <Text style = {{color: "rgb(0, 0, 0)", fontSize: 16}}>GazzyGarcia</Text>
                </View>
                <View style = {{ alignItems: "center"}}>
                    <Text style = {{color: "rgb(0, 0, 0)", fontSize: 30, fontFamily: "notoserif", fontWeight: "bold"}}>...</Text>
                </View>
                </View>



            <Image
                style={{width: this.state.screenWidth, height: this.state.screenWidth * 1.15 }}
                source={{uri: imageURI}}/>

            <View style = {styles.iconBar}>
                <Image style = {[styles.icon, {height: 40, width: 40}]} source = {config.images.likeIcon}/>
                <Image style = {[styles.icon, {height: 40, width: 40}]} source = {config.images.commentIcon}/>
                <Image style = {[styles.icon, {height: 40, width: 40}]} source = {config.images.shareIcon}/>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
        flexDirection:"row"
    },
    icon: {
        paddingHorizontal: 7
    }
});
