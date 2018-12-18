import { createStackNavigator, createAppContainer } from 'react-navigation';
import IndexView from './Tabbar'
import LoginView from './loginRegister/LoginIndex'
import RegisterView from './loginRegister/RegisterIndex'
import ForgetPsdView from './loginRegister/ForgetPsdIndex'
import OpenCityView from './my/OpenCity'
import MyCityView from './my/MyCityIndex'
import RechargeView from './my/RechargeIndex'
import WithdrawIndex from './my/WithdrawIndex'
import SurePayView from './my/SurePayView'
import CityMainPay from './my/CityMainPay'
import HomeListView from './home/HomeList'
import SendPacketView from './home/SendPacket'
import AccountManagerView from './my/AccountManager'

const StackOptions = ({ navigation }) => {
    console.log(navigation);
    let { state, goBack } = navigation;

    // 用来判断是否隐藏或显示header
    const visible = state.params.isVisible;
    let header;
    if (visible === true) {
        header = null;
    }
    const headerStyle = { backgroundColor: '#4ECBFC' };
    const headerTitle = state.params.title;
    const headerTitleStyle = { fontSize: FONT_SIZE(20), color: 'white', fontWeight: '500' }
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            isCustom={true}
            customView={
                <Icon
                    name='ios-arrow-back'
                    size={30}
                    color='white'
                    style={{ marginLeft: 13 }}
                />
            }
            onPress={() => { goBack() }}
        />
    );
    return { headerStyle, headerTitle, headerTitleStyle, headerBackTitle, headerLeft, header }
};

const indexNavigationOptions = ({ navigation }) => ({
    'Home': {
        header: null
    },
    'Market': {
        headerTitle: '商城',
    },
    'My': {
        header: null
    }
})

const AppNavigator = createStackNavigator({
    // 登录 注册
    LoginView: {
        screen: LoginView,
        navigationOptions: {
            header: null
        }
    },

    RegisterView: {
        screen: RegisterView,
        navigationOptions: {
            title: '注册',
        }
    },

    ForgetPsdView: {
        screen: ForgetPsdView,
        navigationOptions: {
            title: '忘记密码',
        }
    },

    IndexView: {
        screen: IndexView,
        navigationOptions: ({ navigation }) => {
            return indexNavigationOptions({ navigation })[navigation.state.routes[navigation.state.index].routeName]
        }
    },

    HomeListView: {
        screen: HomeListView,
        navigationOptions: {
            title: '扫雷',
        }
    },

    SendPacketView: {
        screen: SendPacketView,
        navigationOptions: {
            title: '扫雷',
        }
    },

    OpenCityView: {
        screen: OpenCityView,
        navigationOptions: {
            title: '攻打城主',
        }
    },

    MyCityView: {
        screen: MyCityView,
        navigationOptions: {
            title: '我的城主',

        }
    },

    RechargeView: {
        screen: RechargeView,
        navigationOptions: {
            title: '充值',
        }
    },

    WithdrawView: {
        screen: WithdrawIndex,
        navigationOptions: {
            title: '提币'
        }
    },

    SurePayView: {
        screen: SurePayView,
        navigationOptions: {
            title: '订单支付'
        }
    },

    CityMainPay: {
        screen: CityMainPay,
        navigationOptions: {
            title: '订单支付'
        }
    },

    AccountManagerView: {
        screen: AccountManagerView,
        navigationOptions: {
            title: '我的账户'
        }
    },
}, {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#E76647',
                borderBottomWidth: 0,
            },
        },
    }
)

export default createAppContainer(AppNavigator);