import React from 'react';
import { Button } from 'react-native';

export default class NavigationButton extends React.Component {
    render() {
    return (
        <Button color='#8090a7' onPress={this.props.onPress} title={ this.props.text}/>
    ) }
}