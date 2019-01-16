import React from 'react';
import Content from './Content'
import Actionbar from './Actionbar'
import {StyleSheet, Text, View, Button} from 'react-native'

export default class Game extends React.Component {
    render() {
        if (this.props.finished) {
            return (
                <View style={{justifyContent: 'center', flex: 1}}>
                    <Text style={{color: 'white', fontSize: 35, padding: 20, alignSelf: 'center'}}>Your score is {this.props.score}/10</Text>
                    <Button color='#8090a7' onPress={this.props.onReset} title="Restart"/>
                </View>
            );
        } else{
            return (
                <View style={styles.game}>
                    <Content question={this.props.question}
                             onQuestionAnswer={this.props.onQuestionAnswer}
                    />
                    <Actionbar onSubmit={this.props.onSubmit}
                               onChangeQuestion={this.props.onChangeQuestion}
                               currentQuestion={this.props.currentQuestion}
                               goBack={this.props.goBack}
                    />
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    game: {
        textAlign: 'center', fontSize: 25, justifyContent: 'space-between', flex: 1
    }
})