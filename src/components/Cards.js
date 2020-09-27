
import React, {Component} from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/component_styles/styles'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function Cards(){
return(
    <ScrollView>
    <Card style={[styles.Card ,styles.CardRound]}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/01-balance-of-nature.jpg?w=1600&h=900' }} />
    <Card.Actions>
      <Button onPress={()=>alert('Cancel')}>Cancel</Button>
      <Button onPress={()=>alert('Ok')}>Ok</Button>
    </Card.Actions>
  </Card>

  <Card style={styles.Card}>
 
    <Card.Cover source={{ uri: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/01-balance-of-nature.jpg?w=1600&h=900' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={()=>alert('Cancel')}>Cancel</Button>
      <Button onPress={()=>alert('Ok')}>Ok</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
)
}
export default Cards;