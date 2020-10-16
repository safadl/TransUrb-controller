
import React, {useEffect}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import MainNavigator from './src/navigation/MainNavigator';
import SplashScreen from 'react-native-splash-screen'
 import {Provider} from 'react-redux'

import {store} from './src/redux/store/store'
// import StackNav from './src/components/StackNav';
const App= ()=> {

useEffect(()=>{
SplashScreen.hide()
})
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      
      
          <MainNavigator/>
          
            
           
          
    </Provider>
  );
};

const styles = StyleSheet.create({


});

export default App;
