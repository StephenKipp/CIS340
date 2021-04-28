import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View , Button} from 'react-native';

export default class TouchableButton extends Component() {
onPressButton(){alert('you pressed a button')}

  render(){
  return (
    <View style={styles.container}>

      <View style={styles.containerButton} />
      <Button onPress={this.onPressButton}
      title="Press Button 1"/>


<View style={styles.containerLayout} />
      <Button onPress={this.onPressButton}
      title="Press Button 2"></Button>
 <Button onPress={this.onPressButton}
      title="Press Button 3" color='green'></Button>
    
   
 


<View style={styles.containerButton}/>

<Button onPress={()=>{alert('you tapped the button');}}
title="Press Button 4"></Button>

</View>
);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },


  containerButton:{margin:20},

  containerLayout:{margin:20,flexDirection:'row',justifyContent:'space-between'}


});
