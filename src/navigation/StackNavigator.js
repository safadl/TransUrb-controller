import React from 'react';

import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'
import Scan from '../screens/Scan';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Connexion from '../screens/Connexion'
import Accueil from '../screens/Accueil';
import User from '../screens/User'
import ExpiredUser from '../screens/ExpiredUser'
import NonCUser from '../screens/NonCUSER'
import ProblemDetect from '../screens/ProblemDetect';
import History from '../screens/History'
const stack= createStackNavigator()
const stack2=createStackNavigator();
function Mystack(){
  <stack2.Navigator>
    <stack2.Screen name="connexion" component={Connexion}/>
  </stack2.Navigator>
}
 export default function StackNavigator({navigation}){

    return(
        <stack.Navigator initialRouteName="connexion" screenOptions={{
            headerTintColor: 'white',  
          }}>
             <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}
               name="ProblemDetect" component={ProblemDetect}/> 
               
               <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}
               name="History" component={History}/> 
              <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}
               name="NonCUser" component={NonCUser}/> 
              <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}


               name="expireduser" component={ExpiredUser}/>
              <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}
               name="user" component={User}/>
              <stack.Screen   options={{headerShown:false, headerMode:"screen"}}
                name="connexion" component={Connexion}/> 

              <stack.Screen   options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>( <IonIcons onPress={()=>navigation.navigate('connexion')}  style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
               <HeaderBackButton
                    {...props}
                   
            />
           
          ), headerBackground:()=> <LinearGradient
          colors={['#566EA4', '#0C3C5F']}
          style={{ flex: 1}}
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          end={{x: 1, y: 0}}
        />, headerTitle:'John Doe'})}
               name="accueil" component={Accueil}/>

        <stack.Screen name="stack2" component="Mystack"/>


            <stack.Screen  
          options={({navigation})=>({headerStyle:{height:70},headerTitleStyle:{fontFamily:'Helvetica',alignSelf:'center'},headerRight:()=>(<IonIcons onPress={()=>navigation.navigate('connexion')} style={{paddingRight:10}}  name="exit-outline" size={26} color='white'/>), headerLeft: (props) => (
            <HeaderBackButton
                 {...props}
                 
         />
       ), headerBackground:()=> <LinearGradient
       colors={['#566EA4', '#0C3C5F']}
       style={{ flex: 1}}
       start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
       end={{x: 1, y: 0}}
     />, headerTitle:'John Doe'})}
            
         
            name="Scan" component={Scan}/>
         
        </stack.Navigator>
    )
        }



