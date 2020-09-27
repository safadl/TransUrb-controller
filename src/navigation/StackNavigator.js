import React, { Component } from 'react';
import {Text,View} from 'react-native';
import  {Button} from 'react-native-paper';
import {createStackNavigator}  from '@react-navigation/stack'
import styles from '../styles/component_styles/styles';

const Stack= createStackNavigator()

function Screen1({navigation}){
    return(
        <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
        <Text>First Screen</Text>
        <Button  mode="contained" style={{width:300}}onPress={()=>navigation.navigate('Second Screen')} >Go to second screen</Button>
        </View>
    )
}

function Screen2({navigation}){
    return(
        <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
        <Text>Second Screen</Text>
        <Button  mode="contained" style={{marginTop:10, width:300, alignSelf:'center'}}onPress={()=>navigation.goBack()} >Go back to first screen</Button>
        <Button  mode="contained" style={{marginTop:10, width:300, alignSelf:'center'}}onPress={()=>navigation.push('Second Screen')} >Go to Second screen..again</Button>
        </View>
    )
}

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName={Screen1}>
            <Stack.Screen name='First screen' component={Screen1}  options={{
              headerTitle: props => <Text>Screen 1</Text>,
              
            }}/>
             <Stack.Screen name='Second Screen' component={Screen2}  options={{
              headerTitle: props => <Text>Screen 2</Text>,
           
            }}/>
        </Stack.Navigator>
    )
    }

