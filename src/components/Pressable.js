import React, { Component,useState } from 'react';
import {Pressable,Text,View} from 'react-native'

 export default function Pressables(){
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
      textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
      textLog = 'onPress';
    }
     return(

         <View  style={{backgroundColor:'white', height:'100%', width:'100%' }}>
       {/* on long Press  */}
        <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1), alert('Pressed !');
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white',
              borderRadius:30,
              borderWidth:0.2,
              borderColor:'blue',
              alignItems:'center',
              padding:7,
              margin:100
          },
        ]}>
        {({ pressed }) => (
          <Text >
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
       <Pressable
        onPressOut={() => {
alert('Pressed')        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white',
              borderWidth:0.2,
              borderColor:'blue',
              alignItems:'center',
              padding:7,
              margin:100,
              marginTop:-20
          },
        ]}>
        {({ pressed }) => (
          <Text >
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <Pressable
        onPressOut={() => {
alert('Pressed')        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'rgb(220, 255, 255)',
            
              alignItems:'center',
              justifyContent:'center',
              padding:7,
              margin:20,
              height:100,
              marginTop:-20
          },
        ]}>
        {({ pressed }) => (
          <Text >
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      
      <Pressable
        onPressOut={() => {
alert('Pressed')        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'rgb(220, 255, 255)',
              
              alignItems:'center',
              justifyContent:'center',
              padding:7,
              margin:20,
              height:100,
              marginTop:20,
              borderRadius:30,

          },
        ]}>
        {({ pressed }) => (
          <Text >
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      
      
    </View>
     )
 }