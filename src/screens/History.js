
import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {Text,View,FlatList,ScrollView, Linking,StyleSheet,Alert} from 'react-native'
import {Button,Card,Avatar,IconButton, ActivityIndicator} from 'react-native-paper'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Mydata:[], 
            Mydatabar:[],
            update:false
         
          };
       
        }
     // function DidMount happens when the component is mounted , here we load existing data n our storage  
    componentDidMount() {

const { navigation } = this.props;
this.focusListener = navigation.addListener("focus", () => {
console.log('focused **************************')
this.onLoad1()
this.onLoad2()

});
  }

//get existing qrcodes from its storage
  onLoad1=async ()=>{
    try {
     
     
      await AsyncStorage.getItem('qrcodes').then(data => {if(data!==null){
      this.setState({ Mydata:JSON.parse(data)}); }});
 
 // console.log('update value : '+this.state.update)
  
      }
     catch (err) {
  alert("async storage get data error"+err)
  console.log('async retrieve error')
  }

  }
  //get existing barcodes from its storage
  onLoad2=async()=>{

    try {

   
    await AsyncStorage.getItem('barcodes').then(data => {if(data!==null){this.setState({ Mydatabar:JSON.parse(data)})}});
      }
     catch (err) {
  alert("async storage get data bar codes error"+err)
  console.log('async retrieve error')
  }
}

///// clear function  to remove all the data
removeEverything = async () => {
  try {
    await AsyncStorage.clear()
 Alert.alert('Elements supprimés!')
    this.setState({Mydata:[],Mydatabar:[]})
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
  
}
  
//function to delete specific data (when we click on delete next to an item) ; specific to qrcodes
async remove_data(id)  {
  try {
    this.state.Mydata.splice(id, 1);
    await AsyncStorage.setItem("qrcodes",JSON.stringify(this.state.Mydata))
    this.setState({ Mydata: JSON.parse(await AsyncStorage.getItem("qrcodes")) })

  } catch (error) {
    console.log(error);
  }
};
//function to delete specific data (when we click on delete next to an item) ; specific to barcodes

async remove_barcode(id)  {
  try {
    this.state.Mydatabar.splice(id, 1);
    await AsyncStorage.setItem("barcodes",JSON.stringify(this.state.Mydatabar))
    this.setState({ Mydatabar: JSON.parse(await AsyncStorage.getItem("barcodes")) })

  } catch (error) {
    console.log(error);
  }
};
//render qrcodes
  _renderItem = ({ item,index }) => (
  
console.log("my item is : "+item+" index: "+index),

    <ScrollView
    >
  <Card.Title
    title="QR Code"
    subtitle={item}
    left={(props) => <TouchableOpacity onPress={()=>this.OpenLink(item.toString())}><Avatar.Icon {...props} icon="link" backgroundColor='#195581' /></TouchableOpacity>}
right={(props)=>
  <View style={{padding:10}}>
    <Button color='#195581' style={{marginLRight:0,marginBottom:10,alignSelf:'stretch'}}icon="delete" mode="contained"onPress={()=>this.remove_data(index)}>
Supprimer
</Button>
</View> }

  />

    </ScrollView>
   
  );
  // render barcodes
  _renderItem2 = ({ item,index }) => (
   
    <ScrollView
      style={{
      
      }}
    >
 
  <Card.Title
    title="Barcode"
    subtitle={item}
    left={(props) => <Avatar.Icon {...props} icon="barcode" backgroundColor='#168F62'  />} //backgroundColor='#6fcadc'
right={(props)=><View style={{padding:10}}><Button color='#168F62' style={{marginLRight:0,marginBottom:10,alignSelf:'stretch'}}icon="delete" mode="contained" onPress={()=>this.remove_barcode(index)}>
Supprimer
</Button></View> }
//,color:'#6fcadc'
  />
    </ScrollView>
    
  );
  //items separator
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'grey',
        height: 0.5,
      }}
    />
  );
  //function to redirect us to a website when we click on Link icon next to qrcodes
  OpenLink= (Mylink) => {

    Linking.openURL(Mylink).catch(err =>
      console.error('An error occured', err),
     
  )

};
//check if list is empty
listEmpty=()=>{
  if(this.state.Mydata!==null&&this.state.Mydatabar!==null) 
   return(
<View style={{marginTop:"50%"}}><Text style={{textAlign:'center'}}>There is no results yet.</Text></View>
  )
}
    render() {
        return (
          <ScrollView >
          <View>
            <Text style={{fontSize:30,paddingTop:20,paddingBottom:30,fontWeight:'light',letterSpacing:1,color:'#168F62',alignSelf:'center'}}>Historique</Text>
          <Button  uppercase={false} mode='contained' style={{width:150 , alignSelf:'center'}} color='#195581' onPress={this.removeEverything}>Supprimer tout</Button>
          </View> 
        
          <View style={{padding:15}}>
          <FlatList data={this.state.Mydata}
          
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          
          /> 
        
          <FlatList data={this.state.Mydatabar}
          renderItem={this._renderItem2}
         keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          
                /> 
        </View>

</ScrollView>
        );
    
  }

}
export default History;

