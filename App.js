import React, { Component } from 'react';
import { View, Text } from "react-native";
// import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { fire } from './src/keys/firebaseKeys';
// import { Spinner } from './src/components/Spinner';

// //SCREENS
// import { RegistrationScreen } from './src/screens/auth/RegistrationScreen';
// import { LoginScreen } from './src/screens/auth/LoginScreen';
// import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
// import AccountDetailsScreen from './src/screens/AccountDetailsScreen';
// import AccountsScreen from './src/screens/AccountsScreen';
// import InsightsScreen from './src/screens/InsightsScreen';
// import ReportsScreen from './src/screens/ReportsScreen';
// import UpdateScreen from './src/screens/UpdateScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import AddAccountScreen from './src/screens/AddAccountScreen';
// import AddDebtScreen from './src/screens/AddDebtScreen';
// import AddAssetsScreen from './src/screens/AddAssetsScreen';
// import AddInvestmentsScreen from './src/screens/AddInvestmentsScreen';
import { connect } from 'react-redux';
import { setAccounts } from './src/actions';
import { combineReducers, createStore } from 'redux';
// import store from './src/store/index.js';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    accountArray: state.bankReducer.accountArray,
  }
};

export default connect(mapStateToProps, { setAccounts })(class App extends Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isAuthenticationReady: false,
  //     isAuthenticated: false,
  //     user: null
  //   };
  //   fire.auth().onAuthStateChanged(this.onAuthStateChanged);
  // }

  // onAuthStateChanged = (user) => {
  //   this.setState({
  //     isAuthenticationReady: true,
  //     isAuthenticated: !!user,
  //     user
  //   })
  // }

  componentDidMount() {
    const accounts = new Date().getTime();
    this.props.setAccounts(accounts);
  }
  componentWillReceiveProps(nextProps) {
    console.log('New accounts array has been received', nextProps.accountArray);
  }
  render() {
    console.log('app', this.props);
    // if (!this.state.isAuthenticationReady) {
    //   return (
    //     <Spinner size="large" />
    //   )
    // }
    // else {
    //   return (

    //     <View style={{ flex: 1 }}>
    //       {(this.state.isAuthenticated) ? <LoggedInContainer screenProps={{ user: this.state.user }} /> : <AppContainer />}
    //     </View>
    //   );
    // }
    return (
      <Text> Hello</Text>

    )
  }
}
)
// const TabNavigator = createBottomTabNavigator({
//   Accounts: {
//     screen: AccountsScreen,
//     navigationOptions: {
//       tabBarLabel: "Accounts",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="bank" size={28} color={tintColor} style={styles.footerStyle} />)
//     },
//   },
//   Reports: {
//     screen: ReportsScreen,
//     navigationOptions: {
//       tabBarLabel: "Reports",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="line-chart" size={28} color={tintColor} style={styles.footerStyle} />)
//     },
//   },
//   Update: {
//     screen: UpdateScreen,
//     navigationOptions: {
//       tabBarLabel: "Update",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="dot-circle-o" size={28} color={tintColor} style={styles.footerStyle} />)
//     },
//   },
//   Insights: {
//     screen: InsightsScreen,
//     navigationOptions: {
//       tabBarLabel: "Insights",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="tachometer" size={28} color={tintColor} style={styles.footerStyle} />)
//     },
//   },
//   Settings: {
//     screen: SettingsScreen,
//     navigationOptions: {
//       tabBarLabel: "Settings",
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="cog" size={28} color={tintColor} style={styles.footerStyle} />)
//     },
//   },
// },
//   {
//     tabBarOptions: {
//       activeTintColor: "#7474BF",
//       inactiveTintColor: "#A5A5A5",
//       style: {
//         backgroundColor: '#FFFFFF',
//         height: 70
//       },
//       tabStyle: {
//         padding: 5
//       },
//       labelStyle: {
//         fontSize: 12,
//         paddingTop: 5,
//         marginTop: 7
//       },
//     }
//   })

// const AppSwitchNavigator = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null
//     },
//   },
//   Registration: {
//     screen: RegistrationScreen,
//     navigationOptions: {
//       header: null
//     },
//   },
//   ForgotPass: {
//     screen: ForgotPasswordScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   AccountDetails: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AccountDetailsScreen,
//   },
//   Accounts: {
//     navigationOptions: {
//       header: null
//     },
//     screen: TabNavigator,
//   },
// })


// const AppSwitchNavigator2 = createStackNavigator({
//   Accounts: {
//     navigationOptions: {
//       header: null
//     },
//     screen: TabNavigator,
//   },
//   AccountDetails: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AccountDetailsScreen,
//   },
//   AddAccount: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AddAccountScreen,
//   },
//   AddDebt: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AddDebtScreen,
//   },
//   AddAsset: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AddAssetsScreen,
//   },
//   AddInvestment: {
//     navigationOptions: {
//       header: null
//     },
//     screen: AddInvestmentsScreen,
//   }

// })

// const AppContainer = createAppContainer(AppSwitchNavigator);
// const LoggedInContainer = createAppContainer(AppSwitchNavigator2);

// const styles = {
//   footerStyle: {
//     marginTop: 15
//   }
// }