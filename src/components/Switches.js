import React, { useState } from "react";
import { View, StyleSheet,Text, Platform } from "react-native";
import { Switch,Appbar  } from 'react-native-paper';

const Switches = () => {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const[isSwitchOn, setIsSwitchOn] = React.useState(false);
   
  const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn)};
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
      
      <View style={styles.container}>
      
  <Switch style={{margin:20}} value={isSwitchOn} onValueChange={onToggleSwitch} />
  <Switch style={{margin:20}} color='red'value={isSwitchOn} onValueChange={onToggleSwitch}  />
  <Switch style={{margin:20}} color='violet' value={isSwitchOn} onValueChange={onToggleSwitch}  />

  <Switch style={{margin:20}}   disabled  />

  </View>

  )
  ;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  }
});

export default Switches;
