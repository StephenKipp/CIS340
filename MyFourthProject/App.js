import React from 'react';
import { Text, View, FlatList, SectionList } from 'react-native';

export default  StatesApp = () => {
 return(
  <View style={{flex: 1, paddingTop:22}}>
    <SectionList
    sections  = {[
      {title: 'A', data: ['Alabama', 'Alaska', 'Arizona']},
      {title: 'C', data: ["California","Colorado", "Connecticut"]},
      {title: 'D', data: ["Delaware"]}

    ]}
    renderItem={({item}) => <Text style={{padding: 10,fontSize: 20, height:44}}>{item}</Text>}
    renderSectionHeader={({section})=> <Text style = {{paddingTop: 4, paddingLeft: 10, paddingRight: 10, fontSize:10,fontWeight: 'bold',backgroundColor:'blue'}}>{section.title}</Text>}
    keyExtractor={(item,index)=>index}
    
/>
  
  
</View>


  );//End of return


 }



