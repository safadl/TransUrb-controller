import React, {Component} from 'react'
import {View,Text,Image,ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import {Card, Title, Paragraph, Avatar, Button,} from 'react-native-paper'
import Dash from 'react-native-dash';
import IonIcons from 'react-native-vector-icons/Ionicons';

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            viisble:true
        }
        }
    render(){
        const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

        return(
   <ScrollView style={{backgroundColor:'white'}}>
       <View style={{color:'#195581',alignItems:'center',padding:25}}>         
           <Text style={{color:'#195581',fontSize:20}}>Données abonnement</Text>
            <View style={{marginBottom:25,backgroundColor:'#FCFCFC',borderRadius:15,marginTop:100,shadowColor:'grey',elevation:3,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15, width:Dimensions.get('window').width*0.8}}>
           
           <View style={{justifyContent:'center',alignItems:'center',padding:15}}>
           <Image style={{marginTop:-80, borderColor:'#5A8E1A',borderWidth:2,width:120,height:120,borderRadius:55}} source={require('../assets/images/picture.png')}/>
           <Text style={{color:'#195581', padding:15,fontSize:25}}>John Doe</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', padding:20}}>
               <View style={{backgroundColor:'red',marginRight:5, borderRadius:30, width:15,height:15}} />
               {/* <Image style={{width:10,height:10}} source={require('../assets/images/dot.png')} /> */}
               <Text style={{color:'#404040', fontSize:17}}>Abonnement expiré</Text>
           </View>
           <View style={{marginLeft:20}}>
            <Text style={{color:'#195581',fontSize:13}}>Destination</Text>
            <View style={{padding:15,flexDirection:'row',backgroundColor:'#FCFCFC',borderRadius:7,marginTop:20,shadowColor:'grey',elevation:3,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15, width:Dimensions.get('window').width*0.7 }}>
               <Image style={{margin:15,width:25,height:25,alignSelf:'center'}} source={require('../assets/images/location.png')} />
               <View>
                   <View style={{flexDirection:'row'}}>
               <Text style={{color:'#0073CB'}}>Départ: </Text>
               <Text style={{color:'black',fontWeight:'bold'}}>Libreville</Text>
               </View>
               <Dash dashThickness={1} dashColor='#D8D8D8' style={{width:0.2, height:25, flexDirection:'column'}}/>
               <View style={{flexDirection:'row'}}>

                <Text style={{color:'#0073CB'}}>Arrivé: </Text>
                <Text style={{color:'black',fontWeight:'bold'}}>Oyem</Text>
                </View>

                


               </View>

          
               </View>
            
           </View>
           <View style={{marginLeft:20, marginTop:20}}>
            <Text style={{color:'#195581',fontSize:13}}>Immatriculation</Text>
            <View style={{padding:15,flexDirection:'row',alignItems:'center',backgroundColor:'#FCFCFC',borderRadius:7,marginTop:20,shadowColor:'grey',elevation:3,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15, width:Dimensions.get('window').width*0.7 }}>
               <Image style={{margin:15,width:25,height:25,alignSelf:'center'}} source={require('../assets/images/truck.png')} />
      
                <View style={{flexDirection:'row'}}>
               <Text style={{color:'black'}}>000145897523155</Text>
               </View>
               </View>
            </View>

            <View style={{marginLeft:20, marginTop:20}}>
            <Text style={{color:'#195581',fontSize:13}}>Date d'expiration</Text>
            <View style={{padding:15,flexDirection:'row',alignItems:'center',backgroundColor:'#FCFCFC',borderRadius:7,marginTop:20,shadowColor:'grey',elevation:3,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15, width:Dimensions.get('window').width*0.7 }}>
               <Image style={{margin:15,width:25,height:25,alignSelf:'center'}} source={require('../assets/images/date.png')} />
      
                <View style={{flexDirection:'row'}}>
               <Text style={{color:'black'}}>31 Décembre 2020</Text>
               </View>
      
               </View>
               
            </View>
            <View style={{marginLeft:20, marginTop:20, marginBottom:30}}>
            <Text style={{color:'#195581',fontSize:13}}>Numéro de la carte d’identité nationale</Text>
            <View style={{padding:15,flexDirection:'row',alignItems:'center',backgroundColor:'#FCFCFC',borderRadius:7,marginTop:20,shadowColor:'grey',elevation:3,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15, width:Dimensions.get('window').width*0.7 }}>
               <Image style={{margin:15,width:25,height:25,alignSelf:'center'}} source={require('../assets/images/cin.png')} />
      
                <View style={{flexDirection:'row'}}>
               <Text style={{color:'black'}}>128 000 543</Text>
               </View>
      
               </View>
               
            </View>
       </View>  
       </View> 
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Scan')} style={{width:"80%",alignItems:'center',alignSelf:'center',flexDirection:'row',justifyContent:'center', marginTop:20,height:90,marginBottom:30, borderRadius:8, backgroundColor:"#168F62"}} >
     
        <IonIcons name="scan" size={35} style={{marginRight:5}} color="white" />
        <Text style={{alignSelf:'center',fontSize:25, color:'white'}} >SCANNER LA CARTE</Text>
     
     </TouchableOpacity>    

   </ScrollView>

        )
    }
}
export default User;