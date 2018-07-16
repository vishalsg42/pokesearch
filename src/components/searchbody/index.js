import React from 'react';
import { StyleSheet,ImageBackground,ScrollView, Text, View,Image,Dimensions } from 'react-native';
import { List,ListItem } from 'native-base';

// var width = Dimensions.get('window').width
// var height = Dimensions.get('window').height
var imgBackground = require('../../assets/icons/raids_loading.png');

class SearchBody extends React.Component {

  render() {
    //   {console.log(this.props)}
      {var pokemon =this.props.data;}
    return (
        <ImageBackground source={imgBackground} style={styles.bgImg} >
            {/* <ScrollView> */}
               { 
                   !this.props.isSearch ? 
                   <View>
                    <Text style={styles.header}>#{pokemon.id}- {pokemon.name}</Text>
                    <View style={styles.imgView}>
                        <Image
                            source={{uri: pokemon.sprites.front_default}}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider> 
                            <Text style={{fontWeight:'bold'}}>Size</Text>
                        </ListItem>
                        <ListItem> 
                            <Text >Wieght - {pokemon.weight}Kg</Text>
                        </ListItem>
                        <ListItem> 
                            <Text >Hieght - {pokemon.height/10}m</Text>
                        </ListItem>
                        <ListItem itemDivider> 
                            <Text style={{fontWeight:'bold'}}>Abilities</Text>
                        </ListItem>
                        <List 
                            dataArray={pokemon.abilities}
                            renderRow={(item)=>
                                <ListItem> 
                                    <Text >{item.ability.name}</Text>
                                </ListItem>

                            }
                        > 

                        </List>
                    </View>
                   </View>
                   
                   :''

               }
            {/* </ScrollView> */}
        </ImageBackground>

    );
  }
}

const styles = {
    bgImg:{
        width: '100%',
        height: '100%'
    },
    header: {
        fontSize: 30,
        color: 'red',
        textAlign: 'center'
    },
    imgView: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    img:{
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems:'center'
    },
    info: {
        flex: 1,
        backgroundColor: '#fff',
        opacity: .7
    }
}

export default SearchBody;


