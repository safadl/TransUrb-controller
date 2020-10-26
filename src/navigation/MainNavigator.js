import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import DrawerNavigator from './DrawerNavigator';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import Scan from '../screens/Scan';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import Connexion from '../screens/Connexion'
import StackNavigator from './StackNavigator';
import Accueil from '../screens/Accueil';
import User from '../screens/User'
import ExpiredUser from '../screens/ExpiredUser'
import NonCUser from '../screens/NonCUSER'
import ProblemDetect from '../screens/ProblemDetect';
import History from '../screens/History'
const stack=createStackNavigator();


function GlobalStack({navigation}){
    return(
        <stack.Navigator initialRouteName="expireduser" screenOptions={{
            headerTintColor: 'white',  
          }}>
             <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="ProblemDetect" component={ProblemDetect}/> 
               
               <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="History" component={History}/> 
              <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="NonCUser" component={NonCUser}/> 
              <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="expireduser" component={ExpiredUser}/>
              <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>{navigation.navigate('connexion')}} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="user" component={User}/>
              <stack.Screen   options={{headerShown:false, headerMode:"screen"}}
                name="connexion" component={Connexion}/> 

              <stack.Screen   options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={()=>navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'}}
               name="accueil" component={Accueil}/>


            <stack.Screen  
          options={{headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons style={{paddingRight:10}} onPress={navigation.navigate('connexion')} name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
            <HeaderBackButton
                 {...props}
                 
         />
       ), headerBackground:()=> <LinearGradient
       colors={['#566EA4', '#0C3C5F']}
       style={{ flex: 1}}
       start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
       end={{x: 1, y: 0}}
     />, headerTitle:'John Doe'}}
            
         
            name="Scan" component={Scan}/>
         
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