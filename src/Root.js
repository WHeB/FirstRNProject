import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    Text,
     ScrollView, 
     TouchableOpacity,
     Alert
     } from 'react-native';
import Util from './utils/Tool'
import HomeIndex from './home/HomeIndex'
import MarketIndex from './market/MarketIndex'
import MyIndex from './my/MyIndex'

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _itemChange = (tag) => {

        Alert.alert('你好')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <HomeIndex />
                </ScrollView>
                <View style={styles.barView}>
                    <TouchableOpacity onPress={this._itemChange}>
                        <View style={styles.itemView}>
                            <Image source={require('./image/homeItem.png')} />
                            <Text>红包</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._itemChange}>
                        <View style={styles.itemView}>
                            <Image source={require('./image/marketItem.png')} />
                            <Text>商城</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._itemChange}>
                        <View style={styles.itemView}>
                            <Image source={require('./image/myItem.png')} />
                            <Text>我的</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default Root;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    barView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        marginBottom: 0,
        width: Util.width,
        height: 100,
    },

    itemView: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    itemText: {
        flex: 1,
        fontSize: 12,
        alignContent: 'center',
    }

})