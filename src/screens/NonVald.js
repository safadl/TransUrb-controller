import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,Alert,StyleSheet} from 'react-native'
 import IonIcons from 'react-native-vector-icons/Ionicons';
 import LinearGradient from 'react-native-linear-gradient';
 import PhoneInput from 'react-native-phone-input'
 import DatePicker from 'react-native-datepicker'
 import ViewOverflow from 'react-native-view-overflow';
 import {Modal, Portal, Provider} from 'react-native-paper';

 function NonVald({navigation}){
  const [value, setValue] = React.useState('mobile');
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

return(


    <ScrollView style={{backgroundColor:'white'}} > 

      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:500,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
    
 <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:100}}>Données abonnements</Text>
<View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 100,
      height: 100,
      alignSelf:'center',
      marginTop:230,
      marginVertical:100,
      borderRadius: 50 ,
      backgroundColor: 'white',
      zIndex: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 7,
      borderColor:'#1A9BFE',
      borderWidth:1
    }}
  >
    {/* put profile image here  */}
    <Image  source={require('../assets/images/picture.png')} style={{borderRadius:50,width:99,resizeMode:'contain'}}/>
  </View>
 
       <ScrollView style={{zIndex:1,alignSelf:'center',marginTop:80,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,height:Dimensions.get('window').height*1.05,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
  
      <ScrollView style={{marginTop:50}} >
          <View style={{alignSelf:'center'}}>
      <Text style={{color:'#195581',textAlign:'center'}}>John Doe</Text>
  <Text style={{color:'#168F62',textAlign:'center'}}>Etudiant</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', padding:20}}>
               <View style={{backgroundColor:'red',marginRight:5, borderRadius:30, width:15,height:15}} />
               {/* <Image style={{width:10,height:10}} source={require('../assets/images/dot.png')} /> */}
               <Text style={{color:'#33333D', fontSize:15}}>Abonnement non valide</Text>
           </View>
       
     <View style={{margin:15,marginTop:30}}>
      <Text style={{color:'#195581', fontSize:15}}>Attestation de scolarité</Text>
      {/* <View style={{justifyContent:'center',marginTop:10,backgroundColor:'white',width:Dimensions.get('window').width*0.7,height:50,shadowColor:'#1778BD',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15,borderRadius:3}}>
      <Text style={{margin:5,color:'#195581',fontSize:18}}>photo.png</Text>
      </View> */}

<TouchableOpacity style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69, borderColor:'#FF0000',borderWidth:0.8,borderRadius:5,height:50}} >
{/* <Icon.Button style={styles.icon} backgroundColor='transparent'  size={24} color="#195581" name="image" onPress={this.selectPhotoTapped.bind(this)} /> */}
<TouchableOpacity  onPress={()=>this.selectFile}>
<Image source={require('../assets/images/file.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.60}}/>
</TouchableOpacity>
</TouchableOpacity> 
     </View>
     <Text style={{color:'#FF0000',fontSize:12,marginLeft:15}}>Attestation de scolarité non valide, veuillez réessayer.</Text> 

       {/* <TouchableOpacity onPress={showModal} style={{backgroundColor:'#168F62',justifyContent:'center', margin:10,marginTop:15,height:70,resizeMode:'contain',borderRadius:8}}>
        <Text style={{fontSize:30,alignSelf:'center',color:'white'}}>Confirmer</Text>
       </TouchableOpacity> */}

       </ScrollView>
       {/* <Image  source={require('../assets/images/user.png')} style={{width:100,height:100,borderRadius:50,alignSelf:'center',top:10,position:'absolute'}}/> */}
        </ScrollView>

      </ImageBackground>
      
      
 
      </ScrollView>
)
 }
 
 export default NonVald;
 