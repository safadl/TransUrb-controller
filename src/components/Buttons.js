import React, { Component } from 'react';
import { View, Text, ScrollView, Alert,Image } from 'react-native';
import { Button as Button, IconButton, Colors } from 'react-native-paper'
import styles from '../styles/component_styles/styles';
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Warning, Delete, Success} from '../assets/colors/colors'
function Buttons() {

  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
    <ScrollView contentContainerStyle={{ alignSelf: 'center' }}
      >
            {/* basic button */}
          <Button style={styles.button} onPress={() => Alert.alert('button pressed')}>
            Button
          </Button>
          {/* oulined button */}
          <Button onPress={() => Alert.alert('button pressed')} style={styles.button} mode='outlined'>
             Button
          </Button>
          {/* oulined round button  */}
          <Button onPress={() => Alert.alert('button pressed')} style={[styles.button,styles.Round_button]} mode='outlined'>
            Button
          </Button>
         
          {/* oulined icon button  */}
          <Button style={styles.button}  icon="home" mode="outlined" onPress={() => Alert.alert('button pressed')}>
            Button
         </Button>
         {/* oulined round icon button  */}
         <Button style={[styles.button,styles.Round_button]} mode='outlined'  icon="loading"  onPress={() => Alert.alert('button pressed')}>
          Button
         </Button>
          {/* contained icon button */}
          <Button style={styles.button} icon="cupcake" mode="contained" onPress={() => Alert.alert('button pressed')}>
            Button
          </Button>
          {/* contained round icon button  */}
         <Button style={[styles.button,styles.Round_button]} mode='contained'  icon="home"  onPress={() => Alert.alert('button pressed')}>
          Button
         </Button>
         {/* delete button  */}
         <Button style={[styles.button,styles.Round_button]} mode='contained'  icon="delete"  color={Delete} onPress={() => Alert.alert('button pressed')}>
          DELETE 
         </Button>
         {/* submit button  */}
         <Button style={[styles.button,styles.Round_button]} mode='contained'  icon="check"  color={Success} onPress={() => Alert.alert('button pressed')}>
          Submit
         </Button>
         {/* warning button  */}
         <Button style={[styles.button,styles.Round_button]} mode='contained'  icon="alert"  color={Warning} onPress={() => Alert.alert('button pressed')}>
          Warning
         </Button>
         {/* Disabled button  */}
         <Button style={[styles.button,styles.Round_button]} mode='contained' disabled={true}  color={Warning} onPress={() => Alert.alert('button pressed')}>
          Disabled
         </Button>
         {/* progress button  */}
         <AwesomeButton
           style={{margin:20, alignSelf:'center'}}
            progress
            onPress={(next) => {
             next()
               }}
               backgroundColor	='blue'
           >
            Progress
         </AwesomeButton>
 
         <AwesomeButtonRick style={{margin:10, alignSelf:'center'}} type="primary" onPress={() => Alert.alert('button pressed')}>Primary Button</AwesomeButtonRick>
         <AwesomeButtonRick style={{margin:10, alignSelf:'center'}} type="secondary"onPress={() => Alert.alert('button pressed')} >Secondary Button</AwesomeButtonRick>
         <AwesomeButtonRick style={{margin:10, alignSelf:'center'}} type="anchor"onPress={() => Alert.alert('button pressed')} > Success</AwesomeButtonRick>


        

    </ScrollView>
    </View>
  )
}

export default Buttons;