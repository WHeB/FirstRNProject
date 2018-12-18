// obtained from react native tutorials

import React from 'react';
import { PixelRatio, Platform, SafeAreaView, UIManager, Alert } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  isIOS: Platform.OS == 'ios' ? true : false,
  isAndroid: Platform.OS == 'android' ? true : false,
  isIphoneX() {
    let screenW = Dimensions.get('window').width;
    let screenH = Dimensions.get('window').height;
    if (
      (Number(((screenH / screenW) + "").substr(0, 4)) * 100) === 216) {
      return true
    } else {
      return false
    }
  },
  safetyHeight() {
    let screenW = Dimensions.get('window').width;
    let screenH = Dimensions.get('window').height;
    if (
      (Number(((screenH / screenW) + "").substr(0, 4)) * 100) === 216) {
      return 44
    } else {
      return 20
    }
  },

  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => {
        return response.json()
      })
      .then((responseData) => {
        callback(responseData);
      });
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};

export default Util;