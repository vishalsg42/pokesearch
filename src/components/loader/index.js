import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

let loaderImg = require('../../assets/icons/tenor.gif');

class PokeLoader extends React.Component {
  render() {
    return (
          <View style={{flex:1}}>
              <Image 
                source={loaderImg}
                style={styles.img}
              />
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
    }
}
export default PokeLoader;


