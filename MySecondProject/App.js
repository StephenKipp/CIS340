
import React from 'react';
import {  Text } from 'react-native';

export default function MyApp() {
  return (
   <View>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340!
        
        </Text>
     </View> 
  );    
  }

export default function MultiComp(){
  return(
      <view style={{
        flex: 1,
        justifyContent: 'Center',
        alignItems: 'center'
      }}>

        <text>Welcome to My Class</text>
       <Myapp />
       <Myapp />
       <Myapp />
       <Myapp />
      
       </view>
  );

}


