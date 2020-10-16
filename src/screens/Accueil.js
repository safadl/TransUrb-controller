import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar} from 'react-native'
 import {TextInput,Icon} from 'react-native-paper'
 import styles from '../styles/component_styles/styles';
 import IonIcons from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';


 function Accueil({navigation}){
return(
    <ScrollView style={{backgroundColor:'white', flexDirection:'column'}} >
       {/* <View>
         <StatusBar translucent={true} backgroundColor={'transparent'}  barStyle="light-content"/>
         </View> */}
      <View>

      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:500,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
       <View>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <View  style={{marginTop:35}}><Image style={{backgroundColor:'white',width:Dimensions.get('window').width,height:150,resizeMode:'contain', alignSelf:'center',margin:50}}  source={require('../assets/images/transurb.png')}/>
       </View>
           <Text style={{fontSize:35,color:'white',textAlign:'left',margin:10,marginLeft:50}}>CRÉER et ASSURER le suivi de votre abonnement</Text>
        
        </View> 
      </ImageBackground>
      </View>

<View style={{marginTop:-250,alignItems:'center'}}>
     <TouchableOpacity onPress={()=>navigation.navigate('Infos1')} style={{justifyContent:'center',backgroundColor:'#0C3C5F',margin:20,borderRadius:8,height:80,width:Dimensions.get('screen').width*0.75}} >
        <Text style={{textAlign:'center',fontSize:20,margin:20,height:30,color:'white'}}>SOUSCRIRE UNE CARTE</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#168F62',margin:20,borderRadius:8,height:80,width:Dimensions.get('screen').width*0.75}} onPress={()=>{console.log('kjh')}}>
      <Text style={{textAlign:'center',fontSize:20,margin:20,height:30,color:'white'}}>SOUIVI DE LA SOUSCRIPTION</Text>
     </TouchableOpacity>
     </View>
      </ScrollView>
)
 }
 export default Accueil;