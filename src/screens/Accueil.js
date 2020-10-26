import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity} from 'react-native'
 import {TextInput,Icon} from 'react-native-paper'
 import styles from '../styles/component_styles/styles';
 import IonIcons from 'react-native-vector-icons/Ionicons';


 function Accueil({navigation}){
return(
    <ScrollView contentContainerStyle={{alignItems:'center',flex:1,justifyContent:'center',}}>
   <View >
      <Image style={{width:Dimensions.get('window').width*0.6,height:Dimensions.get('window').height*0.2, resizeMode:'contain'}} source={require('../assets/images/qr.png')} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Scan')} style={{width:"80%",alignItems:'center',flexDirection:'row',justifyContent:'center', marginTop:40,height:90,marginBottom:30, borderRadius:8, backgroundColor:"#168F62"}} >
     
        <IonIcons name="scan" size={30} style={{marginRight:5}} color='white' />
        <Text style={{alignSelf:'center',fontSize:25,color:'white'}} >SCANNER LA CARTE</Text>
     
     </TouchableOpacity>
      </ScrollView>
)
 }
 export default Accueil;