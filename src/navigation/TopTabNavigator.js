import React, { Component } from 'react';
import {Text,View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
function Home(){
  return(
      <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Home Screen</Text>
      </View>
  )
}

function Details(){
  return(
      <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Details Screen</Text>
      </View>
  )
}
function Settings(){
  return(
      <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
      <Text>Settings Screen</Text>
      </View>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default MyTabs;