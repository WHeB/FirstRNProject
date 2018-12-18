import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import CellItem from './ChatCell'


class HomeListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _renderItem = ({ item }) => (
        <CellItem

        />
    )

    _sendRedPacket = () => {
        this.props.navigation.navigate('SendPacketView')
    }

    render() {
        var data = [
            1, 2, 3, 4
        ]
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                />
                <TouchableOpacity activeOpacity={0.8} onPress={this._sendRedPacket}>
                    <View style={styles.sendButtonStyle}>
                        <Text style={{ color: '#fff' }}> 我要发红包</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default HomeListView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-between'
    },

    sendButtonStyle: {
        marginBottom: 0,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 50,
        height: 40,
        backgroundColor: '#E76647',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})