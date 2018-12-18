import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

class ChatCell extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ marginLeft: 15, width: 30, height: 30, backgroundColor: 'red', }}
                />
                <TouchableOpacity>
                    <Image
                        style={{ marginLeft: 10, backgroundColor: 'red', height: 80, width: 250, }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ChatCell;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
    },
})