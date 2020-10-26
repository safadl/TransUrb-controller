import React, { Component, useState } from 'react';
 import {Text,Image,View, Dimensions,ScrollView,StatusBar, ImageBackground,Button,TouchableOpacity} from 'react-native'
 import {TextInput,Icon} from 'react-native-paper'
 import styles from '../styles/component_styles/styles';

function Connexion({navigation}){
    const [text, setText] = React.useState('');
    const [texte, setTexte] = React.useState('');
    const [visible, setVisibility] = React.useState(false);

    return(
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center'}} >
        <View><Image source={require('../assets/images/backgroundc.png')} style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height*0.5}} />
       
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
        </View>
        <Text style={{fontSize:30, color:'#195581', alignSelf:'center',marginTop:-5}}>Connexion</Text>
<View><Text style={{color:'#195581',marginLeft:15,}}>Email</Text>
      <TextInput
    returnKeyType={"next"}
    onSubmitEditing={()=>{pass.focus();}}
    value={text}
    onChangeText={text => setText(text)}
    placeholder='Entrer votre Email'
mode={'outlined'}
color="#1778BD"
placeholderTextColor="#195581"
style={{marginLeft:15, marginRight:15,height:Dimensions.get('window').height*0.1}}
left={<TextInput.Icon name="account"/>}
theme={{ colors: { primary: '#1778BD',underlineColor:'transparent',text:'#195581'}}}


/>
</View>
<View style={{marginTop:25}}>
<Text style={{color:'#195581',marginLeft:15,}}>Mot de passe</Text>
<TextInput
returnKeyType={"done"}
onSubmitEditing={()=>navigation.navigate('accueil')}
    ref={(input)=>{pass=input}}
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
    style={{marginLeft:15, marginRight:15,height:Dimensions.get('window').height*0.1}}

/>
</View>

<TouchableOpacity onPress={()=>navigation.navigate('accueil')} style={{width:Dimensions.get('window').width*0.8,height:Dimensions.get('window').height*0.15, alignSelf:'center',marginBottom:10,justifyContent:'center', marginTop:20,height:65,marginBottom:30, borderRadius:8, backgroundColor:"#168F62"}} >
    <Text style={{alignSelf:'center',fontSize:30,color:'white'}} >CONNEXION</Text>
</TouchableOpacity>

        </View>
    )
    }

    export default Connexion;