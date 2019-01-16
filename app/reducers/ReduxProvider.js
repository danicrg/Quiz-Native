import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import { questions } from '../../assets/mock-data';
import GameScreen from '../components/GameScreen';
import IndexScreen from '../components/IndexScreen'
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    IndexScreen: { screen: IndexScreen },
    GameScreen: { screen: GameScreen }
},{
    initialRouteName: "IndexScreen",
    headerMode: 'none'
})

const AppContainer = createAppContainer(AppNavigator);

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0 ,
            questions: [...questions]
        };
        this.store = this.configureStore();
    }

    render() {

        return (
            <Provider store={ this.store }>
                <AppContainer/>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState)
    }
}