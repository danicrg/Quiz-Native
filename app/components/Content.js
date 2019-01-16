import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from "react-native";
export default class Game extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: this.props.question.attachment.url}} resizeMode="contain"/>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 25, flex: 1}}>{this.props.question.question}</Text>
                <TextInput style={styles.input} type="text" value={this.props.question.userAnswer || ''} onChangeText={(e)=>{
                    this.props.onQuestionAnswer(e);
                }} multiline={false} placeholder="Type your answer here"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex:3, height: undefined, width: undefined, alignSelf: 'stretch'
    },
    content: {
       flex: 1, padding: 10
    },
    input: {
        backgroundColor: 'white', textAlign: 'center', padding: 5
    }
})