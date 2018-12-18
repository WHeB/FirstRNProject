import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tools from '../utils/Tool';

class ForgetPsdView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _chooseAreaOnPress = () => {


  }

  _getVerifyOnPress = () => {


  }

  _registerOnPress = () => {


  }

  render() {
    return (
      <LinearGradient colors={['#E76647', '#D2442F']} style={styles.container}>
        <View style={styles.cardViewStyle}>

          <View style={styles.cellViewStyle}>
            <Text>+86</Text>
            <TextInput
              style={{ left: 15, width: '80%', height: 30 }}
              placeholder='请输入手机号码'
            >
            </TextInput>
          </View>
          <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />

          <View style={styles.cellViewStyle}>
            <TextInput
              style={{ width: '60%', height: 30, }}
              placeholder='请输入手机号码'
            >
            </TextInput>

            <TouchableOpacity
              style={{ left: 20, width: '30%' }}
              activeOpacity={0.8}
              onPress={this._getVerifyOnPress}
            >
              <View style={{ backgroundColor: '#FFD336', height: 28, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 13 }}>获取验证码</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />

          <View style={styles.cellViewStyle}>
            <TextInput
              style={{ width: '90%', height: 30 }}
              placeholder='请设置新的登录密码（6-12位数字或字母）'
            >
            </TextInput>
          </View>
          <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />

          <View style={styles.cellViewStyle}>
            <TextInput
              style={{ width: '90%', height: 30 }}
              placeholder='请确认新的登录密码'
            >
            </TextInput>
          </View>
          <View style={{ backgroundColor: '#cdcdcd', height: 1 }} />
        </View>

        {/* 注册 */}
        <View style={styles.bottomButtonsStyle}>
          <TouchableOpacity
            onPress={this._registerOnPress}
          >
            <Text>确认并返回登录</Text>
          </TouchableOpacity>
        </View>

      </LinearGradient >
    );
  }
}

export default ForgetPsdView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  cardViewStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: Tools.width * 0.9,
    top: 10,
    height: 240,
  },

  cellViewStyle: {
    left: 10,
    right: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  bottomButtonsStyle: {
    top: 60,
    width: 240,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD336'
  }

})