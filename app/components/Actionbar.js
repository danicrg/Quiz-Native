import React from 'react';
import {StyleSheet, View, Button} from "react-native";
import NavigationButton from "./NavigationButton";
export default class Actionbar extends React.Component {
    render() {
        if (this.props.currentQuestion === 0){
            return (
                <View style={styles.actionbar} behavior="padding">
                    <NavigationButton onPress={() => this.props.goBack()} text={"<"}/>
                    <Button color='#8090a7' onPress={this.props.onSubmit} title="Submit"/>
                    <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(false)}} title="Previous" disabled={true}/>
                    <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(true)}} title="Next"/>
                </View>
            );
        }
        if (this.props.currentQuestion === 9){
            return (
                <View style={styles.actionbar}>
                    <NavigationButton onPress={() => this.props.goBack()} text={"<"}/>
                    <Button color='#8090a7' onPress={this.props.onSubmit} title="Submit"/>
                    <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(false)}} title="Previous"/>
                    <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(true)}} title="Next" disabled={true} />
                </View>
            )
        }
        return (
            <View style={styles.actionbar}>
                <NavigationButton onPress={() => this.props.goBack()} text={"<"}/>
                <Button color='#8090a7' onPress={this.props.onSubmit} title="Submit"/>
                <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(false)}} title="Previous"/>
                <Button color='#8090a7' onPress={() => {this.props.onChangeQuestion(true)}} title="Next"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionbar: {
        flexDirection: 'row', justifyContent: 'space-between', padding: 10
    }
})