import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView, ImageBackground,Button,TouchableOpacity} from 'react-native'
 import {TextInput,Icon} from 'react-native-paper'
 import styles from '../styles/component_styles/styles';

function Connexion({navigation}){
    const [text, setText] = React.useState('');
    const [texte, setTexte] = React.useState('');
    const [visible, setVisibility] = React.useState(false);

    return(
        <ScrollView style={{backgroundColor:'white',flex:1}} contentContainerStyle={{justifyContent:'center'}}>
        <View><Image source={require('../assets/images/backgroundc.png')} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height/2}} />
        </View>
        <Text style={{fontSize:30, color:'#195581', alignSelf:'center'}}>Connexion</Text>
<Text>Email</Text>
      <TextInput
    label="Email"
    value={text}
    onChangeText={text => setText(text)}
    placeholder='Entrer votre Email'
mode={'outlined'}
color="#1778BD"
placeholderTextColor="#195581"
style={{marginLeft:15, marginRight:15,height:70}}
left={<TextInput.Icon name="account"/>}
theme={{ colors: { primary: '#1778BD',underlineColor:'transparent',text:'#195581'}}}


/>
<Text>Mot de passe</Text>
<TextInput
    label="Mot de passe"
    value={texte}
    onChangeText={text => setTexte(text)}
    placeholder='Entrer vote mot de passe'
mode={'outlined'}
color="#1778BD"
theme={{ colors: { primary: '#1778BD',underlineColor:'transparent',text:'#195581'}}}
placeholderTextColor="#195581"
secureTextEntry={visible? false : true} 
    left={<TextInput.Icon  name="lock"/>} //optional
    right={<TextInput.Icon onPress={()=>setVisibility(!visible)} name={visible?"eye": "eye-off"}/>} 
    style={{marginLeft:15, marginRight:15,height:70}}

/>
{/* <View style={{width:Dimensions.get('screen').width/2, alignSelf:'center', marginTop:25, borderRadius:50}}>
<Button title="Connexion" value="login"color="#168F62"  />
</View> */}
<TouchableOpacity onPress={()=>navigation.navigate('accueil')} style={{width:"80%", alignSelf:'center',justifyContent:'center', marginTop:40,height:65,marginBottom:30, borderRadius:8, backgroundColor:"#168F62"}} >
    <Text style={{alignSelf:'center',fontSize:30}} >CONNEXION</Text>
</TouchableOpacity>

        </ScrollView>
    )
    }

    export default Connexion;