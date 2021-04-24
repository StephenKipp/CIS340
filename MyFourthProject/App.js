import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {uri: 'https://raw.githubusercontent.com/AdbunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  hight:64

};
export default  MyScrollViewApp = () => (


    <ScrollView>
        <Text style = {{fronsize: 80}}Try to scroll down/> 
      <Image sourse ={require('./assets/icon.png')} style ={{width:64, height:64}} />
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Text style ={{fontsize: 80}} try to scroll down again/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Text style ={{fontsize: 80}} try to scroll down again/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Text style ={{fontsize: 80}} try to scroll down again/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>
      <Image sourse ={dog}/>

    </ScrollView>
  );



