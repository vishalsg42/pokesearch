import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { Button } from 'native-base';

let landingBackground = require('../../assets/icons/landing.jpg');

export default class LandingPage extends React.Component {
  render() {
    return (
        <ImageBackground source={landingBackground} style={{width: '100%',height: '100%'}}>
          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeText}>Welcome to PokeSearch</Text>
            <Button 
              block={true}
              style={styles.searchButton}
              onPress={()=> this.props.switchScreen('search') }  >
              <Text style={styles.searchButtonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  welcomeBox : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    fontSize: 30,
    alignItems:'center',
    color:'blue'
  },
  searchButton : {
    margin: 10
  },
  searchButtonText: {
    color: '#fff'
  }
});
