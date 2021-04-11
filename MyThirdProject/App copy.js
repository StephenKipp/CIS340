import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,TextInput, View } from 'react-native';

function Student (props) {
  return (
    <View >
      <Text>Hey, My Name is {props.name}, I am student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
<view style ={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>

<text>Welcome to CIS 340.</text>
<Student name = "Stephen Kipp" />
<Student name = "Ramadan Abdunami"/>
<Student name = "Bob Smith"/>
<Student name = "Alice Otegia"/>

</view>
  );
}