import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack'

import StackNavigator from './StackNavigator';

const stack=createStackNavigator();


function MainNavigator(){
return( <>

    <NavigationContainer>
          <StackNavigator />
    </NavigationContainer>
    </>
)
}
export default MainNavigator