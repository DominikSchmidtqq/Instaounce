
import React, {Component} from 'react';
import { Image, Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
          <View style = {{flex: 1, width: 100 + "%", height: 100 + "%"}}/>


          <View style={{width:"100%", height:70, backgroundColor: "rgb(246, 246, 246)"}}>

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
  }
});
