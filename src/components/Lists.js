import React, { Component,useState } from 'react';
import { Text, View,FlatList,StyleSheet,StatusBar,ScrollView ,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {List} from 'react-native-paper'
// @flow
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
 
  function PItem({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
        <View style={{alignItems:"center",flex:1}}>
          <Text style={{fontWeight:"bold"}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        
      </View>
    );
  }
  function SItem  ({ title }) {
      return(
    <View style={styles.Sitem}>
      <Text style={styles.Stitle}>{title}</Text>
    </View>
      )
  };
  
function Lists(){
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
      const [images, setimages] = useState([
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',
        'https://www.fonewalls.com/wp-content/uploads/Minimal-Background-HD-Wallpaper-037.jpg',


      ]);
      const [imagesG, setimagesG] = useState([
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',
        'https://image.downhdwalls.com/photos/1024x768/desert-sun-day-5k-minimalism-11435872-1024x768.jpg',



      ]);
      const  Profiledata=[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "Data Entry Clerk",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
       
    
    ]
        return (
            <ScrollView>
             {/* Basic list */}
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
            

         {/* carousel list  */}
           <FlatList
          horizontal={true} 
           showsHorizontalScrollIndicator={false} 
          data={images}
          renderItem={ ({ item, index }) => (
      <Image source={{uri:item}} // Use item to set the image source
        key={index} // Important to set a key for list items
        style={{
          width:150,
          height:150,
          borderWidth:2,
          
          resizeMode:'contain',
          margin:8
        }}
      />
    )}
  />
  {/* Gridview list */}

  <FlatList
  data={imagesG}
  style={{marginLeft:5,alignSelf:"center"}}
  renderItem={({ item,index }) => (
    <View style={{  flexDirection: 'column', margin: 5 }}>
      <Image  key={index} style={{ justifyContent: 'center',alignItems: 'center',height: 100,width:100}} source={{ uri: item }} />
    </View>
  )}
  
  numColumns={3}
  keyExtractor={(item, index) => index.toString()}
/>
{/* Profile list  */}
<FlatList
          style={{flex:1}}
          data={Profiledata} 
          renderItem={({ item }) => <PItem item={item}/>}
          keyExtractor={item => item.email}
        />




{/* tems with title and description  */}
    <List.Item
       title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="calendar" />}
  />
  <List.Item
    title="Second Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
 {/* expanded lists  */}
   <List.Section title="Accordions">
      <List.Accordion
        title="expandable list Controlled "
        left={props => <List.Icon {...props} icon="view-list" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>

 </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c666',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
      },
      listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      },
      Sitem: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginLeft:12,
        marginRight:12
      },
      Sheader: {
        fontSize: 25,
        backgroundColor: "#fff",
        marginLeft:12,


      },
      Stitle: {
        fontSize: 24
      }
  });

  
export default Lists;