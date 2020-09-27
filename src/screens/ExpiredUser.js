import React, {Component} from 'react'
import {View,Text,Image,ScrollView, Dimensions, TouchableOpacity,ImageBackground} from 'react-native'
import {Card, Title, Paragraph, Avatar, Button,} from 'react-native-paper'
import Dash from 'react-native-dash';
import IonIcons from 'react-native-vector-icons/Ionicons';

class ExpiredUser extends React.Component{
    render(){
        const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

        return(
   <ScrollView style={{backgroundColor:'white'}} contentContainerStyle={{alignItems:'center',justifyContent:'center',flex:1}}>
              <View style={{}}>         

     <ImageBackground source={require('../assets/images/backgroundExpired.png')} style={{width:360,height:400}} >
     <View style={{justifyContent:'center',alignItems:'center',margin:4}}>
     <Image source={require('../assets/images/warning.png')} style={{resizeMode:'contain',width:80}}/>
     <Text style={{color:'#EF1401',fontSize:30,marginTop:40}}>Abonnement expiré</Text>
     <Text style={{fontSize:20, color:'#195581',margin:5,padding:40,textAlign:'center'}}>Veuillez renouvelez votre abonnement.</Text>
    </View>

     </ImageBackground>
     
     </View>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Scan')} style={{width:360,alignItems:'center',alignSelf:'center',flexDirection:'row',justifyContent:'center', marginTop:20,height:90,marginBottom:30, borderRadius:6, backgroundColor:"#168F62"}} >
     
     <IonIcons name="scan" size={35} style={{marginRight:5}} />
     <Text style={{alignSelf:'center',fontSize:25}} >SCANNER LA CARTE</Text>
  </TouchableOpacity> 
   </ScrollView>

        )
    }
}
export default ExpiredUser;