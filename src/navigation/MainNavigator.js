import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {Text,Image} from 'react-native'
import DrawerNavigator from './DrawerNavigator';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import StackNavigator from './StackNavigator';
import Accueil from '../screens/Accueil';
import { StatusBar,View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import InfosPerso from '../screens/InfosPerso'
import InfosPerso2 from '../screens/InfosPerso2'
import InfosPerso3 from '../screens/InfosPerso3';
import Donnees from '../screens/Donnees';
import AjoutRef from '../screens/AjoutRef';
import NonVald from '../screens/NonVald'
import Attente from '../screens/Attente';
import Pret from '../screens/Pret';
const stack=createStackNavigator();
// const stacck=createStackNavigator()
// function myStack(){
//     return(
//         <stacck.Navigator  screenOptions={{headerShown:false, headerMode:"screen"}}>
//           <stacck.Screen 
// name="connexion" component={connexion}/> 
//         </stacck.Navigator> 
//     )

// }

function GlobalStack({navigation}){
    return(
        <stack.Navigator initialRouteName="ajoutRef" screenOptions={{
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

function MainNavigator(){
return( <>
    {/* <NavigationContainer>

        <DrawerNavigator/>
    </NavigationContainer> */}
    <NavigationContainer>
          <GlobalStack />
    </NavigationContainer>
    </>
)
}
export default MainNavigator