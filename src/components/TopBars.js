import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform,View} from 'react-native';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TopBars = () => (
    <View >
        <View>
    <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    </View>
    <View style={{marginTop:15}}>
    <Appbar.Header style={{backgroundColor:'#B0FFAD'}} >
       <Appbar.Content  title="Menu" />
        <Appbar.Action icon="menu" onPress={() => {}} />

    </Appbar.Header>
    </View>
   
    </View>
);

export default TopBars;