import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions, StackActions } from "react-navigation";
import Tools from '../utils/Tool';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // 登录
  _loginOnPress = () => {
    let resetActiom = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'IndexView' })
      ]
    })
    this.props.navigation.dispatch(resetActiom)
  }

  _registerOnPress = () => {
    this.props.navigation.navigate('RegisterView')
  }

  _forgetPsdOnPress = () => {
    this.props.navigation.navigate('ForgetPsdView')
  }

  render() {
    return (
      <LinearGradient colors={['#E76647', '#D2442F']} style={styles.container}>

        <View style={styles.titleStyle}>
          <Image
            style={{ width: 200 }}
            resizeMode='contain'
            source={require('../image/loginTitle1.png')}
          />
          <Image
            style={{ height: 50, top: -50 }}
            resizeMode='contain'
            source={require('../image/loginTitle2.png')}
          />
        </View>

        <KeyboardAvoidingView style={styles.loginInfoStyle} behavior="padding">
          {/* <KeyboardAvoidingView
            
          > */}
          {/* 手机号 */}
          <View style={styles.phoneViewStyle}>
            <Image
              style={{ height: 16, left: 10 }}
              resizeMode='contain'
              source={require('../image/loginAccount.png')}
            />
            <TextInput
              style={{ left: 10, right: 10 }}
              placeholder='请输入手机号码'
            >
            </TextInput>
          </View>

          {/* 密码 */}
          <View style={styles.phoneViewStyle}>
            <Image
              style={{ height: 16, left: 10 }}
              resizeMode='contain'
              source={require('../image/loginPsd.png')}
            />
            <TextInput
              style={{ left: 10, right: 10 }}
              placeholder='请输入登录密码'
            >
            </TextInput>
          </View>
          {/* </KeyboardAvoidingView> */}

          <TouchableOpacity activeOpacity={0.8} onPress={this._loginOnPress}>
            <View style={styles.loginButtonStyle}>
              <Text> 登录 </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.registerForgetViewStyle}>
            <TouchableOpacity activeOpacity={0.8} onPress={this._registerOnPress}>
              <Text style={{ color: '#FFF', fontSize: 12 }}> 注册用户 </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={this._forgetPsdOnPress}>
              <Text style={{ color: '#FFF', fontSize: 12 }}> 忘记密码 </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleStyle: {
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginInfoStyle: {
    bottom: 100,
    backgroundColor: '#ff8a6b',
    width: Tools.width * 0.9,
    borderRadius: 10,
  },

  phoneViewStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginButtonStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
    height: 40,
    backgroundColor: '#FFD336',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerForgetViewStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

})