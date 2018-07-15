import React from 'react';
import { StyleSheet, View,Platform } from 'react-native';

import LandingPage from './src/components/landing/index'
import Search from './src/components/search/index'

export default class App extends React.Component {
  state= {
    currentScreen: 'search'
  }

  // switchScreen 
  switchScreen = (currentScreen)=> {
    return this.setState({currentScreen});
  }

  renderScreen=()=> {
    if(this.state.currentScreen === 'landing') {
      return (
        <LandingPage switchScreen={this.switchScreen} />
      )
    } else  if(this.state.currentScreen === 'search') {
      return (
        <Search  />
      )
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ?  24 : 0,
  }
});
