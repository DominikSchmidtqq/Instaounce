
import React, {Component} from 'react';
import { Image, Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
      return (
          <View style={styles.container} >
              <View style = {{flex: 1, width: 100 + "%", height: 100 + "%"}}/>
              <View style = {styles.topBar}>
                  <Text style = {styles.topLogo}>Instaounce</Text>
              </View>
              <View style = {styles.userBar}>
              <View style = {{flexDirection: "row", alignItems: "center"}}>
                  <Image style = {{width: 40, height: 40}} source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lil_Pump%27s_mugshot.jpg/220px-Lil_Pump%27s_mugshot.jpg"}}/>
                  <Text>GazzyGarcia</Text>
              </View>
              </View>
              <View>

              </View>

          <Image
              style={{width: 100 + "%", height: 100 }}
              source={{uri: "https://sludgefeed.com/wp-content/uploads/2018/09/dogecoin-happy-doge-696x435.jpg"}}/>
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
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row"
    }
});
