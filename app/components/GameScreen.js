import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import {questionAnswer, changeQuestion, submit, getQuestions, initQuestions} from "./../reducers/actions";
import Navbar from "./Navbar";
import { View, Text } from 'react-native';


class GameScreen extends Component {
    render() {
        return (
            <View style={{flex:1, margin:10, justifyContent:'center'}}>
                <Navbar/>
                {/*<Game question={this.props.questions[this.props.currentQuestion]}*/}
                      {/*currentQuestion={this.props.currentQuestion}*/}
                      {/*onQuestionAnswer={(answer)=>{*/}
                          {/*this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))*/}
                      {/*}}*/}
                      {/*onChangeQuestion={(next) => {*/}
                          {/*this.props.dispatch(changeQuestion(this.props.currentQuestion +(next ? 1 : -1)))*/}
                      {/*}}*/}
                      {/*onSubmit={() => {*/}
                          {/*this.props.dispatch(submit(this.props.questions))*/}
                      {/*}}*/}
                      {/*finished={this.props.finished}*/}
                      {/*score={this.props.score}*/}
                      {/*onReset={() => {*/}
                          {/*getQuestions().then((questions) => {*/}
                              {/*this.props.dispatch(initQuestions(questions));*/}
                          {/*})*/}
                      {/*}}*/}
                {/*/>*/}
            </View>
        );
    }

    // componentDidMount() {
    //     getQuestions().then((questions) => {
    //         this.props.dispatch(initQuestions(questions));
    //     })
    // }
}


function mapStateToProps(state) {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(GameScreen);
