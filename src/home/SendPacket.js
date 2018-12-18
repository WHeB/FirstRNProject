import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class SendPacketView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _sureSendOnPress = () => {


    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cellViewStyle}>
                    <Text style={{ marginLeft: 10 }}>红包金额</Text>
                    <TextInput style={styles.inputStyle}> 20
                    </TextInput>
                </View>

                <View style={styles.cellViewStyle}>
                    <Text style={{ marginLeft: 10 }}>红包个数</Text>
                    <TextInput style={styles.inputStyle}> 5
                    </TextInput>
                </View>

                <View style={styles.cellViewStyle}>
                    <Text style={{ marginLeft: 10 }}>雷点</Text>
                    <TextInput style={styles.inputStyle}> 4
                    </TextInput>
                </View>

                <View style={{ top: 20, height: 60, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 24, color: '#FFF' }}> 100金币 </Text>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={this._sureSendOnPress}>
                    <View style={styles.sureButtonStyle}>
                        <Text style={{ color: '#DD573C' }}> 塞金币到红包 </Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
}

export default SendPacketView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E76647',
    },

    cellViewStyle: {
        height: 50,
        top: 10,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    inputStyle: {
        marginRight: 10,
        width: 230,
        height: 40,
        textAlign: 'right'
    },

    sureButtonStyle: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
        height: 40,
        backgroundColor: '#FFD336',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

