import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    ImageBackground,
    StyleSheet
} from 'react-native';
import Tools from '../utils/Tool'
import { ScrollView } from 'react-native-gesture-handler';

class SurePayView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _chosePayType = () => {


    }

    _surePayOnPress = () => {


    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.orderInfoStyle}>
                    <View style={styles.orderInfoCellStyle}>
                        <Text>充值账号</Text>
                        <Text>admin</Text>
                    </View>
                    <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />

                    <View style={styles.orderInfoCellStyle}>
                        <Text>充值订单</Text>
                        <Text>1000金币</Text>
                    </View>
                    <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />
                    <View style={styles.orderInfoCellStyle}>
                        <Text>支付金额</Text>
                        <Text>￥1000</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 20, height: 40, justifyContent: 'center' }}>
                    <Text>请选支付支付方式</Text>
                </View>

                {/* 支付方式 */}
                <View style={{ backgroundColor: '#FFF' }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._chosePayType}>
                        <View style={styles.payTypeStyle}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 40, height: 40, }}
                                    resizeMode='contain'
                                    source={require('../image/aliIcon.png')}
                                />
                                <Text style={{ left: 10 }}> 支付宝 </Text>
                            </View>
                            <Image
                                style={{ width: 20, height: 20, }}
                                resizeMode='contain'
                                source={require('../image/chooseSelect.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={this._chosePayType}>
                        <View style={styles.payTypeStyle}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 40, height: 40, }}
                                    resizeMode='contain'
                                    source={require('../image/wechatIcon.png')}
                                />
                                <Text style={{ left: 10 }}> 微信 </Text>
                            </View>
                            <Image
                                style={{ width: 20, height: 20, }}
                                resizeMode='contain'
                                source={require('../image/chooseSelect.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 确认充值 */}
                <View style={styles.footViewStyle}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._surePayOnPress}>
                        <View style={styles.buttonViewStyle}>
                            <Text style={{ color: '#fff' }}>确认充值</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default SurePayView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },

    orderInfoStyle: {
        height: 120,
        backgroundColor: '#FFF',
        // alignItems: 'center',
        justifyContent: 'center',
    },

    orderInfoCellStyle: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },

    payTypeStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        height: 60,
    },

    footViewStyle: {
        top: 50,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonViewStyle: {
        height: 40,
        width: Tools.width - 50,
        backgroundColor: '#D2442F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})