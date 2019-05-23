import React, { Component } from 'react';
import myTheme from '../../src/themes/variables/myTheme';
import { Container, StyleProvider, Content, Card } from 'native-base';
import { FlatList, Text, View, ScrollView, StatusBar, ImageBackground } from 'react-native';
import getTheme from '../../src/themes/components';
import BankAccount from '../components/BankAccount';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import AccountHeader from '../components/AccountHeader';
import { db, fire } from '../keys/firebaseKeys';
// import { store } from '../../index';

import { connect } from 'react-redux'

import { setAccounts } from '../actions';
import { setDebts } from '../actions';
import { setAssets } from '../actions';
import { setInvestments } from '../actions';

//Accounts Screen
class AccountsScreen extends Component {

    constructor() {
        super();
        this.state = {
            debtArray: [],
            accountArray: [],
            assetsArray: [],
            investmentsArray: [],

            accountsTotal: 0,
            debtsTotal: 0,
            investmentsTotal: 0,
            assetsTotal: 0,


        }


    }
    componentDidMount = async () => {

        //cards
        let accountArray = [];
        await db.ref(`accounts/${this.props.screenProps.user.uid}`).on('value', (snap) => {
            if (snap.val()) {
                let values = snap.val();
                Object.keys(values).forEach(key => {
                    accountArray.push({
                        id: key,
                        value: values[key]
                    })
                });
                this.props.setAccounts(accountArray);
                let accountsTotal = 0;
                for (var i = 0; i < accountArray.length; i++) {
                    accountsTotal += parseFloat(accountArray[i].value.balance.replace(/,/, '.'));
                }
                this.setState({
                    accountsTotal
                })
            }
        });

        console.log('dezefokign', this.props);

        //debts
        let debtArray = [];
        await db.ref(`debts/${this.props.screenProps.user.uid}`).on('value', (snap) => {
            if (snap.val()) {
                let values = snap.val();
                console.log('val', values);
                Object.keys(values).forEach(key => {
                    debtArray.push({
                        id: key,
                        value: values[key]
                    })
                })
                this.props.setDebts(debtArray);
                let debtsTotal = 0;
                for (var i = 0; i < debtArray.length; i++) {
                    debtsTotal += parseFloat(debtArray[i].value.balance.replace(/,/, '.'));
                }
                this.setState({
                    debtsTotal
                })
            }
        });
        console.log(this.state.debtArray);

        //assets
        let assetsArray = [];
        await db.ref(`assets/${this.props.screenProps.user.uid}`).on('value', (snap) => {
            if (snap.val()) {
                let values = snap.val();
                Object.keys(values).forEach(key => {
                    assetsArray.push({
                        id: key,
                        value: values[key]
                    })
                })
                this.props.setAssets(assetsArray);
                let assetsTotal = 0;
                for (var i = 0; i < assetsArray.length; i++) {
                    assetsTotal += parseFloat(assetsArray[i].value.balance.replace(/,/, '.'));
                }
                this.setState({
                    assetsTotal
                })
            }
        });
        console.log(this.state.assetsArray);

        //investments
        let investmentsArray = [];
        await db.ref(`investments/${this.props.screenProps.user.uid}`).on('value', (snap) => {
            if (snap.val()) {
                let values = snap.val();
                Object.keys(values).forEach(key => {
                    investmentsArray.push({
                        id: key,
                        value: values[key]
                    })
                });
                this.props.setInvestments(investmentsArray);
                console.log(this.props);
                let investmentsTotal = 0;
                for (var i = 0; i < investmentsArray.length; i++) {
                    investmentsTotal += parseFloat(investmentsArray[i].value.balance.replace(/,/, '.'));
                }
                this.setState({
                    investmentsTotal
                })
            }
        });

    }

    render() {
        // console.log('e', store.getState().bankReducer.accountArray)
        let totalNetWorth = (this.state.accountsTotal + this.state.debtsTotal + this.state.assetsTotal + this.state.investmentsTotal);
        console.log(this.props);
        console.log('total', totalNetWorth);
        const { listViewstyle, textHeaderStyle, contentStyle, textStyle } = styles

        return (


            <ImageBackground source={require('../assets/backgroudn.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <StyleProvider style={getTheme(myTheme)}>
                        <View>
                            <StatusBar
                                translucent={false}
                                animated={false}
                                hidden={false}
                                backgroundColor="#7374BF"
                                barStyle="light-content" />

                            <AccountHeader totalNetWorth={totalNetWorth} />
                            <Content style={listViewstyle}>
                                <Card style={contentStyle}>
                                    <View>
                                        <Text style={textHeaderStyle}>Accounts & Cards</Text>
                                    </View>
                                    {this.state.accountArray && this.state.accountArray.length > 0 ? <FlatList
                                        data={this.props.accountArray}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <BankAccount
                                                    key={index}
                                                    account={item}
                                                />)
                                        }}
                                    /> : <Text style={textStyle}>No Banks Found</Text>}
                                </Card>
                                <Card style={contentStyle}>
                                    <View>
                                        <Text style={textHeaderStyle}>Investments</Text>
                                    </View>
                                    {this.state.investmentsArray && this.state.investmentsArray.length > 0 ? <FlatList
                                        data={this.props.investmentsArray}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <BankAccount
                                                    key={index}
                                                    account={item}
                                                />)
                                        }}
                                    /> : <Text style={textStyle}>No Banks Found</Text>}
                                </Card>
                                <Card style={contentStyle}>
                                    <View>
                                        <Text style={textHeaderStyle}>Assets</Text>
                                    </View>
                                    {this.state.assetsArray && this.state.assetsArray.length > 0 ? <FlatList
                                        data={this.state.assetsArray}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <BankAccount
                                                    key={index}
                                                    account={item}
                                                />)
                                        }}
                                    /> : <Text style={textStyle}>No Banks Found</Text>}
                                </Card>
                                <Card style={contentStyle}>
                                    <View>
                                        <Text style={textHeaderStyle}>Debts</Text>
                                    </View>
                                    {this.state.debtArray && this.state.debtArray.length > 0 ? <FlatList
                                        data={this.state.debtArray}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <BankAccount
                                                    key={index}
                                                    account={item}
                                                />)
                                        }}
                                    /> : <Text style={textStyle}>No Banks Found</Text>}
                                </Card>
                            </Content>
                        </View>


                    </StyleProvider>
                </ScrollView>
            </ImageBackground>


        );
    }
}

const styles = {
    listViewstyle: {

        paddingRight: 10,
        paddingLeft: 10
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#7474BF",
        marginTop: 12.5,
        fontWeight: "700",
        textAlign: "center"
    },
    contentStyle: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 3,
    },
    textStyle: {
        fontSize: 17,
        color: "#525252",
        textAlign: 'center',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        accountArray: state.bankReducer.accountArray,
        debtArray: state.bankReducer.debtArray,
        assetsArray: state.bankReducer.assetsArray,
        investmentsArray: state.bankReducer.investmentsArray
    }
};


export default connect(mapStateToProps, { setAccounts, setDebts, setAssets, setInvestments })(AccountsScreen);