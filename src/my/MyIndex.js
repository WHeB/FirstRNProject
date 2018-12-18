import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  StyleSheet
} from 'react-native';
import Tools from '../utils/Tool'
import HeadView from './MyHeadView'
import { NavigationActions, StackActions } from "react-navigation";

class MyIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // 退出登录
  _logoutOnPress = () => {
    let resetActiom = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginView' })
      ]
    })
    this.props.navigation.dispatch(resetActiom)
  }

  _headView = () => {
    return (
      <HeadView />
    )
  }

  _footerView = () => {
    return (
      < View style={styles.footViewStyle} >
        <TouchableOpacity activeOpacity={0.8} onPress={this._logoutOnPress}>
          <View style={styles.logoutViewStyle}>
            <Text style={{ color: '#fff' }}> 退出登录</Text>
          </View>
        </TouchableOpacity>
      </View >
    )
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={item.link}>
      <View style={styles.itemStyle}>
        <Image
          style={styles.itemImgStyle}
          resizeMode='contain'
          source={item.img} />
        <Text> {item.text}</Text>
      </View>
    </TouchableOpacity>
  )

  render() {
    var data = [
      {
        text: '开通城主',
        img: require('../image/myCity.png'),
        link: () => {
          this.props.navigation.navigate('OpenCityView')
        }
      },
      {
        text: '充值',
        img: require('../image/myChong.png'),
        link: () => {
          this.props.navigation.navigate('RechargeView')
        }
      },
      {
        text: '提现',
        img: require('../image/myTixian.png'),
        link: () => {
          this.props.navigation.navigate('WithdrawView')
        }
      },
      {
        text: '账户管理',
        img: require('../image/myAccount.png'),
        link: () => {
          this.props.navigation.navigate('AccountManagerView')
        }
      },
      {
        text: '我的团队',
        img: require('../image/myTeam.png'),
        link: () => {
          this.props.navigation.navigate('')
        }
      },
      {
        text: '排行榜',
        img: require('../image/myList.png'),
        link: () => {
          this.props.navigation.navigate('')
        }
      },
      {
        text: '推广海报',
        img: require('../image/myTuiguang.png'),
        link: () => {
          this.props.navigation.navigate('')
        }
      },
      {
        text: '玩法介绍',
        img: require('../image/myIntroduce.png'),
        link: () => {
          this.props.navigation.navigate('')
        }
      },
      {
        text: '官方公告',
        img: require('../image/myNotice.png'),
        link: () => {
          this.props.navigation.navigate('')
        }
      },
    ];

    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#D2442F' }} />
        <FlatList
          contentContainerStyle={styles.listViewStyle}
          data={data}
          renderItem={this._renderItem}
          ListHeaderComponent={this._headView}
          ListFooterComponent={this._footerView}
        />
      </View>
    );
  }
}

export default MyIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 10,
  },

  itemStyle: {
    width: 100,
    height: 100,
    marginLeft: (Tools.width - 300) / (3 + 1),
    marginTop: 10,
    alignItems: 'center'
  },

  itemImgStyle: {
    width: 75,
    height: 75,
  },

  footViewStyle: {
    width: Tools.width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutViewStyle: {
    height: 30,
    width: 100,
    backgroundColor: '#D2442F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  }
})


