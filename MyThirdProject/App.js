
import React,{useState} from 'react';
import { Text,View, Button } from 'react-native';

function TV(props){

  Const [isOff,setIsOff] = sueState(true);
return(
  <view>
{"\n\n\n\n"}

<text>
 This is {props.name} TV, and it is {isOff ? "Off" : "Turn me on"}
</text>
<button onPress={() => {
setIsOff(false)
}}
disabled = {!isOff}
title={isOff ? "Turn me on,Please!" : "Thank you!"}
/>

  </view>

);
}

export default function MultiTvs(){
return(
  <view>
    <TV name = "LG"/>
    <TV name = "Sony"/>
  </view>
);
}