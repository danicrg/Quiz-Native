import React from 'react';
import {StatusBar, View} from 'react-native';
import NavigationButton from '../components/NavigationButton'

export default class IndexScreen extends React.Component {
    render() {
    return (

        <View style={{ flex:1, alignItems:'center', justifyContent:'center', margin:0, backgroundColor: '#2e3742', color: 'white'}}>
            <StatusBar hidden={true}/>
            <NavigationButton
                onPress={() => this.props.navigation.navigate('GameScreen')} text={"Play"}/>
        </View> )
    }
}