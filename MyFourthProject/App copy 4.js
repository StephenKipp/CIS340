import React from 'react';
import { Text, View, FlatList } from 'react-native';




export default  StatesApp = () => {
 return(
  <View style={{flex: 1, paddingTop:22}}>
    <FlatList 
    data={[
      {key:'Alabama'},
      {key: 'Alaska'},
      {key: 'Arazona'},
      {key: 'Arkansas'},
      {key: 'California'},
      {key: 'Colorado'},
      {key: 'Georgia'},
      {key: 'Iowa'},
      {key: 'Maine'},
      {key: 'Flordia'},
      {key: 'Mississippi'},


    ]}
    returnItem={({item}) => <Text style={{padding: 10,fontSize: 20, height:44}}>{Item.key}</Text>}
    />

  
  
</View>


  );//End of return


 }



