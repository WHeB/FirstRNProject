import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class AccountLogCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', height: '35%', }}>
                    <Text style={{ marginLeft: 10, fontSize: 10 }}> 2018-08-08  09:18:28 </Text>
                </View>
                <Text style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: '#707070' }}> </Text>

                <View style={{ justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '65%', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>
                        抢红包
                    </Text>

                    <Text style={{ marginRight: 10, fontSize: 16 }}>
                        -30金币
                    </Text>
                </View>
            </View>
        );
    }
}

export default AccountLogCell;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 100,
        marginLeft: 5,
        marginTop: 5,
        marginRight: 5,
    },

})