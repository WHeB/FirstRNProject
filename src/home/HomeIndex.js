import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SectionList,
  Alert,
} from 'react-native';
import Tools from '../utils/Tool'

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _headView = () => {
    return (
      <View style={{
        width: Tools.width,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          height: Tools.safetyHeight() + 20,
        }}>
        </View>
        <Image
          resizeMode='contain'
          source={require('../image/homeBanner.png')}
        />
      </View>
    )
  }

  _sectionComp = (info) => {
    var imgPath = info.section.head;
    return (
      <View style={styles.headView}>
        <Image
          style={{ height: 30 }}
          resizeMode='contain'
          source={imgPath}
        />
      </View>
    )
  }

  _renderItem = (info) => {
    var imgPath = info.item.img;
    return (
      <View style={styles.cellView}>
        <TouchableOpacity activeOpacity={0.8} onPress={this._comeInHome}>
          <Image
            style={{ width: 100 }}
            resizeMode='contain'
            source={imgPath}
          />
        </TouchableOpacity>
      </View>
    )
  }

  _comeInHome = () => {
    this.props.navigation.navigate('HomeListView')
  }

  render() {
    var sections = [
      {
        head: require('../image/saolei.png'),
        data: [{
          img: require('../image/homeXin.png'),
        }, {
          img: require('../image/homePutong.png'),
        }, {
          img: require('../image/homeYin.png'),
        }, {
          img: require('../image/homeJin.png'),
        }, {
          img: require('../image/homeZuanshi.png'),
        }, {
          img: require('../image/homeHao.png'),
        }]
      },
      {
        head: require('../image/jielong.png'),
        data: [{
          img: require('../image/homeXin2.png'),
        }, {
          img: require('../image/homeZuanshi2.png'),
        }, {
          img: require('../image/homeHao2.png'),
        }]
      }
    ];
    return (
      <ImageBackground
        source={require('../image/homeBg.png')}
        style={styles.container}>
        <ImageBackground
          style={{ width: '100%', height: 204, position: 'absolute', top: 0 }}
          source={require('../image/homeHeadBg.png')}>
          <View style={{ top: Tools.safetyHeight(), flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ left: 20, flexDirection: 'row' }}>
              <Text style={{ color: '#FFF' }}> 剩余奖励金：</Text>
              <Text style={{ color: '#FFF' }}> 1231243 </Text>
            </View>
            <View style={{ right: 20, flexDirection: 'row' }}>
              <Text style={{ color: '#FFF' }}> 在线：</Text>
              <Text style={{ color: '#FFF' }}> 1212 </Text>
            </View>
          </View>
        </ImageBackground>

        <SectionList
          contentContainerStyle={styles.listViewStyle}
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          ListHeaderComponent={this._headView}
          sections={sections}
          // 禁止头部悬浮
          stickySectionHeadersEnabled={false}
        />
      </ImageBackground>
    );
  }
}

export default HomeIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    position: 'absolute',
  },

  headView: {
    width: Tools.width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cellView: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: (Tools.width - 300) / (3 + 1),
  },
})