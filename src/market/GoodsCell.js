import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

class GoodsCell extends Component {

    _onPress = () => {
        // this.props.onPressItem(this.props.title);
    };

    _exchangePress = () => {
        Alert.alert(this.props.goodsName)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this._onPress}>
                <View style={styles.cellView}>
                    <Image
                        style={styles.goodsImgView}
                    // source={require('')}
                    />

                    <View style={styles.textStyle}>
                        <Text style={styles.goodsNameText}>
                            {this.props.goodsName}
                        </Text>

                        <Text style={styles.descText}>
                            {this.props.specification}
                            {/* 23 */}
                        </Text>

                        <Text style={styles.descText}>
                            {this.props.grade}
                            {/* 34 */}
                        </Text>

                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={this._exchangePress}>
                        <Image
                            style={styles.exchangeButton}
                            resizeMode='contain'
                            source={require('../image/exchange.png')}
                        />
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>
        );
    }
}

export default GoodsCell;

const styles = StyleSheet.create({
    cellView: {
        height: 100,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },

    goodsImgView: {
        width: 80,
        height: 80,
        marginLeft: 15,
        backgroundColor: 'yellow'
    },

    textStyle: {
        marginLeft: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 180,
    },

    goodsNameText: {
        fontSize: 16,
        color: '#000'
    },

    descText: {
        fontSize: 14,
        color: '#333',
        marginTop: 10,
    },

    exchangeButton: {
        marginRight: 15,
        width: 70
    }
})


