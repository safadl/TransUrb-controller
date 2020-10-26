import React, { Component } from 'react';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import LinearGradient from 'react-native-linear-gradient';
import Accueil from '../screens/Accueil';
import InfosPerso from '../screens/InfosPerso'
import InfosPerso2 from '../screens/InfosPerso2'
import InfosPerso3 from '../screens/InfosPerso3';
import Donnees from '../screens/Donnees';
import AjoutRef from '../screens/AjoutRef';
import NonVald from '../screens/NonVald'
import Attente from '../screens/Attente';
import Pret from '../screens/Pret';

const stack= createStackNavigator()

    export default function StackNavigator({navigation}){
        return(
            <stack.Navigator initialRouteName="Accueil" screenOptions={{
     headerShown:false,
        headerStyle: {
          backgroundColor: "transparent"
        }
      ,
      headerLayoutPreset: "center",
    
      headerBackground: <LinearGradient
      colors={['#566EA4', '#0C3C5F']}
      style={{ flex: 1}}
      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
      end={{x: 1, y: 0}}
    />,
    
                headerTintColor: 'white',  
              }}>
    
                <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="accueil" component={Accueil}/>
    
                <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Pret" component={Pret}/> 
     
    
    
    
    
    
                 <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Attente" component={Attente}/> 
                 <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="NonVald" component={NonVald}/> 
                <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="ajoutRef" component={AjoutRef}/> 
    
      <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Donnees" component={Donnees}/>          
    
    
    <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Infos3" component={InfosPerso3}/>
    
    
    
    
           <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackButton
                        {...props}
                       
                />
            
                
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Infos1" component={InfosPerso}/>
    
               
    
    
    
    
                <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'}, headerLeft: (props) => (
                   <HeaderBackfButton
                        {...props}
                       
                />
              ), headerBackground:()=> <LinearGradient
              colors={['#566EA4', '#0C3C5F']}
              style={{ flex: 1}}
              start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              end={{x: 1, y: 0}}
            />, headerTitle:''}}
                   name="Infos2" component={InfosPerso2}/>
           
          
             
            </stack.Navigator>
        )
            }
    
