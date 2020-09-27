import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import {View, Pressable} from 'react-native'
const Modals = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <Provider >
      <Portal >
          
        <Modal visible={visible} onDismiss={hideModal} style={{backgroundColor:'red',}} contentContainerStyle={{alignSelf:'center'}}>
         <View style={{backgroundColor:'#fff', width:350,height:500, justifyContent:'center'}}>
             <Text style={{color:'#000',alignSelf:'center'}}>Example Modal</Text>
         </View> 
        </Modal>
        <View style={{flexDirection:'row',alignSelf:'center'}}>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show Modal
        </Button>
        <Button style={{marginTop: 30}} onPress={hideModal}>
          Close Modal
        </Button>
        </View>
      </Portal>
      
    </Provider>
  );
};
export default Modals