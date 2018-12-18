import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeIndex from './home/HomeIndex'
import MarketIndex from './market/MarketIndex'
import MyIndex from './my/MyIndex'

class TabBarItem extends Component {
    render() {
        return (
            <Image
                source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
                style={[
                    {
                        width: 30,
                        height: 30
                    }
                ]}
            />
        )
    }
}

const RootTabs = createBottomTabNavigator({
    Home: {
        screen: HomeIndex,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "首页",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require("./image/homeItem.png")}
                    selectedImage={require("./image/homeItem.png")}
                />
            ),
        })
    },
    Market: {
        screen: MarketIndex,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "商城",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require("./image/marketItem.png")}
                    selectedImage={require("./image/marketItem.png")}
                />
            ),
        })
    },
    My: {
        screen: MyIndex,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: "我的",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require("./image/myItem.png")}
                    selectedImage={require("./image/myItem.png")}
                />
            ),
        })
    },
},
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#FFF',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#FFF',
            //tab bar的样式
            style: {
                // height: 50,
                backgroundColor: '#E25E41',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 11,
                margin: 1
            },
        },
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootTabs);