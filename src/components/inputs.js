import React, {Component,useState} from 'react'
import {ScrollView, TextInput as TextInputr} from 'react-native'
import {TextInput,Icon} from 'react-native-paper'
import styles from '../styles/component_styles/styles'
function inputs({props}) {
  const [text, setText] = React.useState('');
    const [texte, setTexte] = React.useState('');
    const [textet, setTextet] = React.useState('');
    const [textett, setTextett] = React.useState('');
    const [textd, setTextd] = React.useState('');
    const [textu, setTextu] = React.useState('');
    const [visible, setVisibility] = React.useState(false);


return( 
  <ScrollView >
   {/* outlined input */}
<TextInput
style={styles.input}
    label="Input"
    value={text}
    onChangeText={text => setText(text)}
    placeholder='Enter some text'
mode={'outlined'}

/>
<TextInput
style={styles.input}
    label="Username"
    value={textu}
    onChangeText={text => setTextu(text)}
    placeholder='Enter some text'
mode={'outlined'}
left={<TextInput.Icon name="account"/>}

/>
   {/* flat input */}
<TextInput
style={styles.input}
    label="Input"
    value={textet}
    onChangeText={text => setTextet(text)}
    placeholder='Enter some text'
mode={'flat'} // default is flat
  />
  {/*  input error */}
  <TextInput
  style={styles.input}

    label="Error"
    value={texte}
    onChangeText={text => setTexte(text)}
    placeholder='Enter some text'
    error={true}
  />
  {/* input password  */}
   <TextInput
   style={styles.input}

    label="Password"
    value={textett}
    onChangeText={text => setTextett(text)}
    placeholder='Enter password'
    secureTextEntry={visible? false : true} 
    left={<TextInput.Icon  name="lock"/>} //optional
    right={<TextInput.Icon onPress={()=>setVisibility(!visible)} name={visible?"eye": "eye-off"}/>}  //optional

  />
  {/* diasbled */}
    <TextInput
   style={styles.input}
  disabled={true}
    label="Input"
    value={textd}
    onChangeText={text => setTextd(text)}
    placeholder='Enter password'
  />
  {/* basic  */}
  <TextInputr
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40} // optional
    //  numberOfLines={20}// optional
      style={{borderColor:'grey',borderWidth:0.5, margin:20,paddingLeft:10}}
      placeholder='Enter Some text'
    />
    <TextInputr
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40} // optional
    //  numberOfLines={20}// optional
      style={{borderColor:'grey',borderBottomWidth:0.5, margin:20,paddingLeft:10}}
      placeholder='Enter Some text'/>
     <TextInputr
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40} // optional
    //  numberOfLines={20}// optional
      style={{borderColor:'grey',borderWidth:0.5, margin:20,borderRadius:30, paddingLeft:10}}
      placeholder='Enter Some text'
    />
  
  </ScrollView>
  
  
  )
   
}
export default inputs;