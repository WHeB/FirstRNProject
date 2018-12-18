import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import Tools from '../utils/Tool'
import AccountCell from './AccountLogCell'

class AccountManagerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    // 充值
    _rechargeOnPress = () => {
        this.props.navigation.navigate('RechargeView')
    }

    _headerView = ({ item }) => {
        return (
            <View style={styles.headViewStyle}>
                <View style={styles.balanceStyle}>
                    <Text style={{ height: '20%' }}>我的余额</Text>
                    <View style={{ flexDirection: 'row', top: 10, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 30, }}>
                            888
                        </Text>
                        <Text style={{ fontSize: 12, left: 8, bottom: 8 }}>
                            金币
                        </Text>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={this._rechargeOnPress}>
                    <View style={styles.chongzhiBtnStyle}>
                        <Text style={{ color: '#D44731' }}>充值</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    _renderItem = ({ item }) => (
        <AccountCell

        />
    )

    render() {
        var data = [
            1, 2, 3, 4
        ]
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._headerView}
                />
            </View>
        );
    }
}

export default AccountManagerView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E76647',
    },

    headViewStyle: {
        backgroundColor: '#FFF',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // width: '100%',
    },

    balanceStyle: {
        marginLeft: 15,
    },

    chongzhiBtnStyle: {
        marginRight: 10,
        alignItems: 'center',
        backgroundColor: '#FFD336',
        width: 80,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
    }

})