import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
import Tools from '../utils/Tool'

class MyHeadView extends Component {

    render() {
        return (
            <View style={styles.headView}>
                <View style={styles.redView}>
                    <View style={styles.infoView}>
                        <Image
                            style={styles.headImgStyle}
                        />

                        <View style={styles.nickUidStyle}>
                            <Text style={{ color: '#fff' }}> 转转乐 </Text>
                            <Text style={{ color: '#fff', marginTop: 5 }}> UID: 1231231 </Text>
                            <View>
                                <Text style={{ color: '#fff', marginTop: 5 }}> VIP1 </Text>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <Image
                                style={{ width: 100 }}
                                resizeMode='contain'
                                source={require('../image/signIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                < ImageBackground style={styles.moneyView} source={require('../image/moneyBg.png')}>
                    <View style={styles.shoiyiStyle}>
                        <Text> 0 </Text>
                        <Text style={{ marginTop: 5 }}> 总收益 </Text>
                    </View>

                    <View style={styles.shoiyiStyle}>
                        <Text> 0</Text>
                        <Text style={{ marginTop: 5 }}> 今日收益</Text>
                    </View>

                    <View style={styles.shoiyiStyle}>
                        <Text> 0 </Text>
                        <Text style={{ marginTop: 5 }}> 积分收益 </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default MyHeadView;

const styles = StyleSheet.create({

    headView: {
        width: Tools.width,
        height: 200,
        alignItems: 'center',
    },

    redView: {
        width: Tools.width,
        backgroundColor: '#D2442F',
        height: 140,
        alignItems: 'center'
    },

    infoView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        height: 80,
        width: Tools.width * 0.9,
    },

    headImgStyle: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 10,
    },

    nickUidStyle: {
        marginLeft: 10,
        width: Tools.width * 0.9 - 140,
    },

    moneyView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: Tools.width * 0.9,
        bottom: 50,
    },

    shoiyiStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})