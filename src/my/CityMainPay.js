import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Tools from '../utils/Tool'
import { ScrollView } from 'react-native-gesture-handler';

// 城主付款
class CityMainPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _getVerifyOnPress = () => {


    }

    _surePayOnPress = () => {


    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.orderInfoStyle}>
                    <View style={styles.orderInfoCellStyle}>
                        <Text>购买类型</Text>
                        <Text>admin</Text>
                    </View>
                    <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />

                    <View style={styles.orderInfoCellStyle}>
                        <Text>充值订单</Text>
                        <Text>1000金币</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 20, height: 50, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20 }}>18688888888</Text>
                </View>

                {/* 验证码 */}
                <View style={styles.codeInfoStyle}>
                    <TextInput
                        style={{ marginLeft: 10, width: 200, height: 40, }}
                        placeholder={'请输入验证码'} >
                    </TextInput>

                    <TouchableOpacity activeOpacity={0.8} onPress={this._getVerifyOnPress}>
                        <View style={{
                            width: 120,
                            height: 40,
                            backgroundColor: '#D95038',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ color: '#FFF' }}>获取验证码</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 确认充值 */}
                <View style={styles.footViewStyle}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._surePayOnPress}>
                        <View style={styles.buttonViewStyle}>
                            <Text style={{ color: '#fff' }}>确认购买</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

export default CityMainPay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },

    orderInfoStyle: {
        height: 80,
        backgroundColor: '#FFF',
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

    codeInfoStyle: {
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },


})
