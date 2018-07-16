import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

let loaderImg = require('../../assets/icons/tenor.gif');

class PokeLoader extends React.Component {
  render() {
    return (
          <View style={{flex:1,alignItems:'center'}}>
              <Image 
                source={loaderImg}
                style={styles.img}
              />
              <Text style={styles.loadingText}>Loading...</Text>
          </View>
    );
  }
}



const styles = {
    img: {
        width: 400,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText : {
      fontSize: 24,
    }
}
export default PokeLoader;


