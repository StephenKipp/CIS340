import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App(){

  return (
    <View style={styles.container}>
      <Image source = {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
      style ={styles.logo}
      
      ></Image>
  
      <TouchableOpacity
        style = {styles.button}
        onPress ={this.onTap}>
            <Text>Touch Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
      
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {alignItems:"center",backgroundColor:'#008B8B',padding:10},
  counterText: {alignItems:"center",padding:10},

  insts:{fontSize: 20,color:"#888",marginHorizontal:10},

logo :{
  width:305,
  hight:305,
  marginBottom:20
}

});
