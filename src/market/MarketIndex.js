import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet
} from 'react-native';
import GoodsCell from './GoodsCell'

class MarketIndex extends Component {

  _header = () => {
    return (
      <View style={styles.headView}>
        <Image
          style={styles.grade}
          resizeMode='contain'
          source={require('../image/marketGrade.png')}
        />

        <Text style={styles.headViewTitle}>
          1888
        </Text>

        <Image
          style={{ marginRight: 15, width: 60 }}
          resizeMode='contain'
          source={require('../image/gradeRule.png')}
        />
      </View>
    )
  }

  _renderItem = ({ item }) => (
    <GoodsCell
      goodsName={item.name}
      specification={item.spec}
      grade={item.grade}
    />
  )

  render() {
    var data = [{
      img: '',
      name: '手机12',
      spec: '小',
      grade: 100,
    },
    {
      img: '',
      name: '手机23',
      spec: '小',
      grade: 100,
    },
    {
      img: '',
      name: '手机34',
      spec: '小',
      grade: 100,
    },
    {
      img: '',
      name: '手机45',
      spec: '小',
      grade: 100,
    }
    ];

    return (
      <FlatList
        data={data}
        ListHeaderComponent={this._header}
        renderItem={this._renderItem}
        ItemSeparatorComponent={() => <View style={styles.cellLine}></View>}
      />
    );
  }
}

export default MarketIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  cellLine: {
    marginLeft: 10,
    marginRight: 10,
    height: 1,
    backgroundColor: 'gray'
  },

  headView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  grade: {
    marginLeft: 15,
    width: 60,
  },

  headViewTitle: {
    color: '#333',
    width: '60%'
  }

})