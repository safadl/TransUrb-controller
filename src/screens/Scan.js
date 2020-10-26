import React, { Component } from 'react';

 import {
  ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Dimensions,
    View,Button,Image,
    TouchableHighlight,Alert,
  } from 'react-native';
  import _ from 'lodash'
  import QRCodeScanner from 'react-native-qrcode-scanner';
  import { RNCamera } from 'react-native-camera';
  import Icon from "react-native-vector-icons/MaterialIcons";
  import * as Animatable from "react-native-animatable"
  import AsyncStorage from '@react-native-community/async-storage'

class Scan extends React.Component{
    constructor(props){
        super(props)
            this.state={
              Mycamera:"back",
              // switcher:true
              qr:"",
              Savedcode:"",
              values:[],
        
              
            }
           
            console.log("values")     
          }
// function used automatically when detecting codes
    onSuccess = (e) => {
   
      // Linking.openURL(e.data)
      if(e.data!==null){
      alert("Scanned code value is : " + e.data+ "Barcode type is" + e.type)
       if(e.type=='QR_CODE'){
        this._storeData(e) //store qrcodes in qrcodes storage

       }
       else {
         this._storeBar(e)  //store barcodes in barcodes storage
       }
      }
      else{
        alert('Unable to scan ')
      }
      };
  // function to store the detected barcodes in a storage named "barcodes"
      _storeBar = async (e) => {
        try{
     
          
          let oldValues= await AsyncStorage.getItem('barcodes')
          this.state.values=JSON.parse(oldValues)
          
          if(oldValues!==null){
            this.setState({
              values: [...this.state.values,e.data]
            })
          }
          else{
            this.setState({
              values:[this.state.values,e.data]
            })
          }
    
         AsyncStorage.setItem('barcodes',JSON.stringify(this.state.values));
         console.log('my data stored is : '+this.state.values)
         
        }
        catch (error) {
        
        
        alert("error : "+e.data+error)  
    
        }}

// flip camera when clicked
      changeCamera=()=>{
        if(this.state.Mycamera==='back')
      this.setState({
        Mycamera:'front'
      })
      else{
        this.setState({
          Mycamera:'back'
        })
      }
        }

// function used in camera
      makeSlideOutTranslation(translationType, fromValue) {
        return {
          from: {
            [translationType]: SCREEN_WIDTH * -0.18
          },
          to: {
            [translationType]: fromValue
          }
        };
      }

      // function to store the detected qrcodes in a storage named "qrcodes"
  
      _storeData = async (e) => {
        try{
        
          
          let oldValues= await AsyncStorage.getItem('qrcodes')
          
          this.state.values=JSON.parse(oldValues)
          if(oldValues!==null){
            this.setState({
              values: [...this.state.values,e.data],
              
            })
          
          }else{
            this.setState({
              values:[this.state.values,e.data]
            })
          }
          AsyncStorage.setItem('qrcodes',JSON.stringify(this.state.values));
         console.log('my data stored is : '+this.state.values)
        
        }
        catch (error) {
        alert("error : "+e.data+error)  
        }}
      render(){

      
return(
    <ScrollView  style={{borderRadius:20, backgroundColor:'white'}}>

    <View style={{justifyContent:'center',alignItems:'center',paddingTop:80}}>
    <Image  style={{width:Dimensions.get('window').width*0.7,height:Dimensions.get('window').height*0.1}} source={require('../assets/images/transurb.png')} />
    </View>

    <Text style={{alignSelf:'center',fontFamily:'Helvetica Neue', color:'#168F62',fontSize:25, paddingTop:100}}>Analyse d'abonnement</Text>
    <Text style={{alignSelf:'center',fontFamily:'Helvetica Neue', color:'#168F62',fontSize:18, marginBottom:15}}>Placez le code QR à l’intérieur de la zone</Text>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('History')} style={{justifyContent:'center',margin:10,backgroundColor:'#168F62',width:150,height:50,alignSelf:'center',borderRadius:30 }}>
      <Text style={{color:'white',alignSelf:'center',fontSize:15,fontWeight:'bold'}}>Voir historique</Text>
    </TouchableOpacity>

    <QRCodeScanner
 
        fadeIn={true}
        onRead={this.onSuccess.bind(this)}
         
        flashMode={RNCamera.Constants.FlashMode.auto}
    
       reactivate={true}
        reactivateTimeout={2000}
        showMarker={true}
      
        customMarker={<View style={styles.rectangleContainer}>

        <View style={styles.topOverlay}>
         
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.leftAndRightOverlay} />

          <View style={styles.rectangle}>
          <Image style={{width:350,height:350}} source={require('../assets/images/extr.png')}/>
            <Animatable.View
              style={styles.scanBar}
              direction="alternate-reverse"
              iterationCount="infinite"
              duration={1700}
              easing="linear"
              animation={this.makeSlideOutTranslation(
                "translateY",
                SCREEN_WIDTH * -0.70
              )}
            />
          </View>

          <View style={styles.leftAndRightOverlay} />
        </View>

        <View style={styles.bottomOverlay} />
      </View>}
        cameraType=  {this.state.Mycamera}
        cameraStyle={{height:Dimensions.get('window').height*0.8,width:Dimensions.get('window').width}}
  
  
      

      />

      <Text style={{color:'red'}}>{this.state.qr}</Text>
     
      <View style={{width:100,height:100,margin:10}}>
      <Icon name="switch-camera" size={35} color="white" onPress={this.changeCamera.bind(this)} />
        </View>
  
    </ScrollView>
)
}
}
const SCREEN_WIDTH = Dimensions.get("window").width;
const overlayColor = "rgba(0,0,0,0.6)"; 

const rectDimensions = SCREEN_WIDTH * 0.65;



const scanBarWidth = SCREEN_WIDTH * 0.5; 
const scanBarHeight = SCREEN_WIDTH * 0.008; 
const styles = StyleSheet.create({
 


  buttonTouchable: {
    padding: 16
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: '#7EA44F'
  }
});
export default Scan;