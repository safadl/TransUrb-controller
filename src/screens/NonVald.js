import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity,StatusBar,TextInput, Platform,Alert,StyleSheet} from 'react-native'
 
 import {useSelector,useDispatch} from 'react-redux'
 import DocumentPicker from 'react-native-document-picker';
 import { change_attestation } from '../redux/actions/actionCreators';

 function NonVald({navigation}){
  const data=useSelector((state)=>state);
  const dispatch=useDispatch()
  const {photo,attest,name}=data;
  const [file,setFile]=useState('');

  selectOneFile =async ()=> {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setFile(res)
      dispatch(change_attestation(res.name))
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert("Aucun fichier n'a été sélectionné");
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

return(


    <ScrollView style={{backgroundColor:'white'}} > 

      <ImageBackground imageStyle={{width:Dimensions.get('window').width,height:Dimensions.get('window').height*0.65,resizeMode:'stretch'}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../assets/images/backa.png')}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={require('../assets/images/back.png')} style={{width:30,marginLeft:20,marginTop:30,resizeMode:'contain'}}/>
      </TouchableOpacity>
       <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
    
 <Text style={{alignSelf:'center', fontSize:20,color:'white',marginTop:50}}>Données abonnements</Text>
<View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 100,
      height: 100,
      alignSelf:'center',
      marginTop:165,
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
   {photo==null?<Image  source={require('../assets/images/picture.png')} style={{borderRadius:50,width:99,resizeMode:'contain'}} /> : <Image  source={photo} style={{borderRadius:50,width:99,height:99,resizeMode:'cover'}} />}
  </View>
 
       <ScrollView style={{zIndex:1,alignSelf:'center',marginTop:80,marginBottom:20,backgroundColor:'white',width:Dimensions.get('window').width*0.8,height:Dimensions.get('window').height*1.05,shadowColor:'grey',elevation:2,shadowOffset:{width:5,height:2},shadowOpacity:0.6,shadowRadius:15}}>
  
      <ScrollView style={{marginTop:50}} >
          <View style={{alignSelf:'center'}}>
      <Text style={{color:'#195581',textAlign:'center'}}>{name}</Text>
  <Text style={{color:'#168F62',textAlign:'center'}}>Etudiant</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center', padding:20}}>
               <View style={{backgroundColor:'red',marginRight:5, borderRadius:30, width:15,height:15}} />
               <Text style={{color:'#33333D', fontSize:15}}>Abonnement non valide</Text>
           </View>
       
     <View style={{margin:15,marginTop:30}}>
      <Text style={{color:'#195581', fontSize:15}}>Attestation de scolarité</Text>
   

<TouchableOpacity onPress={selectOneFile} style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:15,width:Dimensions.get('window').width*0.69, borderColor:'#FF0000',borderWidth:0.8,borderRadius:5,height:50}} >
<View style={{margin:2}}>
<Text numberOfLines={2} style={{color:'black',fontSize:12,marginLeft:7}}>{file.name? 'Nom: ' : ' '} {file.name ?file.name : ''}</Text>
<Text numberOfLines={2} style={{color:'black',fontSize:12,marginLeft:7}}>{file.size? 'Taille : ' : ' '}{file.size? file.size : ''}{file.size? 'KB' : ''}</Text>

</View>
<TouchableOpacity  onPress={selectOneFile}>
<Image source={require('../assets/images/file.png')} style={{width:30,height:30, marginLeft:Dimensions.get('window').width*0.55}}/>
</TouchableOpacity>



</TouchableOpacity> 
     </View>
     <Text style={{color:'#FF0000',fontSize:12,marginLeft:15}}>Attestation de scolarité non valide, veuillez réessayer.</Text> 

       </ScrollView>
        </ScrollView>

      </ImageBackground>
      
      
 
      </ScrollView>
)
 }
 
 export default NonVald;
 