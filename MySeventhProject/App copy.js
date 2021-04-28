import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerButton} />
      <Button onPress={()=>{alert('you tapped the button');}}
      title="Press Button 1"></Button>


<View style={styles.containerLayout} />
      <Button onPress={()=>{alert('you tapped the button');}}
      title="Press Button 2"></Button>
 <Button onPress={()=>{alert('you tapped the button');}}
      title="Press Button 3" color='green'></Button>
    
   
 


<View style={styles.containerButton}/>

<Button onPress={()=>{alert('you tapped the button');}}
title="Press Button 4"></Button>

</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },


  containerButton:{margin:20},

  containerLayout:{margin:20,flexDirection:'row',justifyContent:'space-between'}


});
