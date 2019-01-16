import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Navbar extends React.Component {
    render() {
        return (
            <View>
            <Text style={styles.header}>
                QUIZ
            </Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({ header: {
        fontSize: 25, padding: 10, backgroundColor: '#8090a7', justifyContent: 'flex-start', color: 'white'
    }
})