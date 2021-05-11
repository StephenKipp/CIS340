import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const csuLogo = {
uri:'https://www.bing.com/images/search?view=detailV2&ccid=9%2bAhafzz&id=CE0C33C1123F7E152AE3BD7A05678CE2B5BA4534&thid=OIP.9-AhafzztaPtF53FMwakJQHaDH&mediaurl=https%3a%2f%2f3dprint.com%2fwp-content%2fuploads%2f2016%2f04%2fcsu-logo.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fRf7e02169fcf3b5a3ed179dc53306a425%3frik%3dNEW6teKMZwV6vQ%26pid%3dImgRaw&exph=168&expw=400&q=CSU+Logo.png&simid=608003357284041372&ck=58FD8C6250E7C347CA1BCFC18E12D620&selectedIndex=9&FORM=IRPRST&ajaxhist=0',
width: 80,
height: 80
  };
  return (
    <View style={styles.container}>
     <ImageBackground source={csuLogo} style={styles.image}/>
      <Text style={styles.text}>CSU Logo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    flexDirection:"row"
  },
  localCSULogo:{
      width:55,
      height: 65
  },
  image:{flex:1,resizeMode:"cover",justifyContent:"center"},
  urlCSILogo:{
    width: 50, height:50
  },
strech: {width: 80, height:200, resizeMode:'center'},
text:{color: "red",fontSize:40, fontWeight:'bold'}
});
