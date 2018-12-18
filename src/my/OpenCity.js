import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    BVLinearGradient,
    Image,
    Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tools from '../utils/Tool';

class OpenCityView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _sureSellCityMain = () => {
        this.props.navigation.navigate('CityMainPay')
    }

    render() {
        return (
            <LinearGradient colors={['#E76647', '#D2442F']} style={styles.container}>

                {/* 选择框 */}
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.searchStyle}>
                        <Text style={{ color: '#FFF', fontSize: 14, marginLeft: 10 }}> 请选择你想要攻打的城市</Text>
                        <Image
                            style={{ height: 15 }}
                            resizeMode='contain'
                            source={require('../image/rightItem.png')}
                        />
                    </View>
                </TouchableOpacity>
                
                {/* 地图 */}
                <View style={styles.mapView}>

                </View>

                {/* 购买数据 */}
                <View style={styles.goodsDataStyle}>
                    <View style={styles.chooseCityStyle}>
                        <Image
                            style={{ width: 15 }}
                            resizeMode='contain'
                            source={require('../image/location.png')}
                        />
                        <Text style={[styles.chooseCityTextStyle, { marginLeft: 10 }]}>深圳市</Text>
                        <Text style={[styles.chooseCityTextStyle, { marginLeft: 15 }]}>子民: </Text>
                        <Text style={styles.chooseCityTextStyle}> 1 </Text>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.dataCellStyle}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>城主：</Text>
                                <Text style={{ color: '#FFF' }}>无</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>子民：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>收益：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.dataCellStyle}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>城主：</Text>
                                <Text style={{ color: '#FFF' }}>无</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>子民：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>收益：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.dataCellStyle}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>城主：</Text>
                                <Text style={{ color: '#FFF' }}>无</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>子民：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#FFF' }}>收益：</Text>
                                <Text style={{ color: '#FFF' }}>0</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 购买按钮 */}
                <View style={styles.buyStyle}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._sureSellCityMain}>
                        <View style={styles.buyTitleStyle}>
                            <Text style={{ color: '#fff' }}> 购买</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </LinearGradient >
        );
    }
}

export default OpenCityView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    searchStyle: {
        height: 35,
        width: Tools.width * 0.9,
        marginTop: 20,
        backgroundColor: '#ff8a6b',
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    mapView: {
        height: 200,
        width: Tools.width * 0.9,
        marginTop: 20,
        backgroundColor: '#fff',
    },

    goodsDataStyle: {
        height: 200,
        width: Tools.width * 0.9,
        marginTop: 20,
        backgroundColor: '#ff8a6b',
        borderRadius: 10,
        padding: 15,
    },

    chooseCityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },

    chooseCityTextStyle: {
        color: '#FFF',
        fontSize: 15,
    },

    dataCellStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
    },

    buyStyle: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buyTitleStyle: {
        height: 30,
        width: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})