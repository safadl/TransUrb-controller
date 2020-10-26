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

      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
       <View style={{flex:1}}>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       <View  style={{marginTop:35}}><Image style={{backgroundColor:'white',width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.2,resizeMode:'contain', alignSelf:'center',margin:50}}  source={require('../assets/images/transurb.png')}/>
       </View >
       <View style={{width:Dimensions.get('window').width*0.9,height:Dimensions.get('window').height*0.5}}>
           <Text style={{fontSize:30,color:'white',textAlign:'left',marginLeft:50}}>CRÉER et ASSURER le suivi de votre abonnement</Text>
           </View>
        </View> 
      </ImageBackground>
      </View>

  <View style={{marginTop:-180,alignItems:'center',flex:1,}}>
     <TouchableOpacity onPress={()=>navigation.navigate('Infos1')} style={{justifyContent:'center',backgroundColor:'#0C3C5F',margin:20,borderRadius:8,height:Dimensions.get('window').height*0.1,width:Dimensions.get('screen').width*0.75}} >
        <Text style={{textAlign:'center',fontSize:20,margin:20,color:'white'}}>SOUSCRIRE UNE CARTE</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('ajoutRef')}  style={{justifyContent:'center',backgroundColor:'#168F62',margin:20,borderRadius:8,height:Dimensions.get('window').height*0.1,width:Dimensions.get('screen').width*0.75}} >
      <Text style={{textAlign:'center',fontSize:20,margin:20,color:'white'}}>SOUIVI DE LA SOUSCRIPTION</Text>
     </TouchableOpacity>
   </View>

 </ScrollView>
)
 }
 export default Accueil;