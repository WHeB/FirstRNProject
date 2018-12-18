import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  StyleSheet
} from 'react-native';
import Tools from '../utils/Tool'
import { ScrollView } from 'react-native-gesture-handler';

// 充值
class RechargeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _surePayOnPress = () => {
    this.props.navigation.navigate('SurePayView')
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={item.link}>
      <View style={styles.itemStyle}>
        <View style={{ left: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textStyle}>￥</Text>
          <Text style={styles.textStyle}> {item.money} </Text>
        </View>
        <View style={{ right: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textStyle}> {item.coinNum}</Text>
          <Text style={styles.textStyle}> 金币</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  render() {
    var data = [
      {
        money: 10,
        coinNum: 10,
      },
      {
        money: 10,
        coinNum: 10,
      },
      {
        money: 10,
        coinNum: 10,
      },
      {
        money: 10,
        coinNum: 10,
      },
      {
        money: 10,
        coinNum: 10,
      },
      {
        money: 10,
        coinNum: 10,
      },
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headView}>
          <Text style={{ left: 20 }}> 金额： </Text>
          <Text style={{ left: 20, color: '#FFD336' }}> 1980 </Text>
          <Text style={{ left: 20 }}> 金币 </Text>
        </View>

        <View style={{ top: 20, height: 40, left: 20 }}>
          <Text>请选择充值金额:</Text>
        </View>

        {/* 九宫格 */}
        <FlatList
          contentContainerStyle={styles.listViewStyle}
          data={data}
          renderItem={this._renderItem}
        />

        {/* 数量 */}
        <View style={styles.numberStyle}>
          <TextInput
            style={{ flex: 1, marginLeft: 15, marginRight: 15 }}
            placeholder='请输入其他金额'
          >
          </TextInput>
        </View>

        {/* 立即充值 */}
        <View style={styles.footViewStyle}>
          <TouchableOpacity activeOpacity={0.8} onPress={this._surePayOnPress}>
            <View style={styles.buttonViewStyle}>
              <Text style={{ color: '#fff' }}>立即充值</Text>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

export default RechargeView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  headView: {
    top: 10,
    width: Tools.width,
    backgroundColor: '#EBEBEB',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },

  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 10,
  },

  itemStyle: {
    width: 150,
    height: 36,
    marginLeft: (Tools.width - 300) / 3,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    borderRadius: 18,
  },

  textStyle: {
    color: '#FFF',
  },

  numberStyle: {
    top: 20,
    height: 40,
    backgroundColor: '#EBEBEB',
    width: Tools.width - 50,
    left: 25,
    justifyContent: 'center',
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


