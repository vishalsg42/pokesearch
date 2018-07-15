import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { Button,Header,Icon,Input,Item } from 'native-base';
import axios from 'axios';

import PokeLoader from '../loader/index';
import SearchBody from '../searchbody/index';

class Search extends React.Component {
  state= {
    pokeSearch: "",
    isSearch: true,
    data: {}
  }

  searchPoke = ()=> {
    this.setState({isSearch:true});
    var self = this;
    var name = this.state.pokeSearch ?   this.state.pokeSearch.toLowerCase() : '';
    axios.get('http://pokeapi.co/api/v2/pokemon/'+name)
        .then(response => {
          console.log(response);
          self.setState({isSearch: false})
          self.setState({data: response.data})
          
        }).catch(error=>{
          console.log(error);
          self.setState({isSearch: true})
        })
  }

  renderBody = ()=>{
    if(this.state.isSearch){
      return (
        <PokeLoader />
      )
    } else {
      return(
        <SearchBody />
      )
    }
  }

  render() {
    return (
          <View >
            <Header searchBar rounded>
              <Item>
                <Icon name='ios-search' onPress={this.searchPoke}/>
                <Input placeholder="Search" 
                  value={this.state.pokeSearch}
                  onChange={(pokeSearch)=>this.setState({pokeSearch}) }
                />
              </Item>
              <Button transparent onPress={this.searchPoke}>
                <Text>Search</Text>
              </Button>
            </Header>
            {this.renderBody()}
          </View>
    );
  }
}

export default Search;

// const styles = StyleSheet.create({
//   welcomeBox : {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   welcomeText: {
//     fontSize: 30,
//     alignItems:'center',
//     color:'blue'
//   },
//   searchButton : {
//     margin: 10
//   },
//   searchButtonText: {
//     color: '#fff'
//   }
// });
