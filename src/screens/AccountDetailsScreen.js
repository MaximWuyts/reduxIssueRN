import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/Ionicons'
import AddHistoryModal from '../components/AddHistoryModal';
import { fire, db } from '../keys/firebaseKeys';
import moment from 'moment';
import { Card } from 'native-base';

class AccountDetailsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balance: this.props.navigation.state.params.account.value.balance,
            date: "",
            historicalValues: []
        };
    }

    componentDidMount() {
        db.ref(`accounts/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.account.id}/history`).on('value', (snap) => {
            if (snap.val()) {
                let historicalValues = Object.values(snap.val());
                this.setState({
                    historicalValues
                })
            }
        });
    }

    addBalance = () => {

        fire.database().ref(`accounts/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.account.id}`).update({
            balance: this.state.balance,
        })
        fire.database().ref(`accounts/${this.props.screenProps.user.uid}/${this.props.navigation.state.params.account.id}/history`).push({
            balance: this.state.balance,
            date: moment().format('DD/MM/YY')
        })
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event
        })
    }

    pressedBtn = () => {
        console.log('test');
        this.refs.addModal.showAddModal()
    }


    render() {
        const { listViewstyle, listViewstyle1, textHeaderStyle, textHeaderStyle2, contentStyle, cardStyle, textStyle } = styles
        return (
            <ImageBackground source={require('../assets/backgroudn.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>

                <AddHistoryModal
                    ref={"addModal"}
                    addBalanceFunction={this.addBalance}
                    balance={this.state.balance}
                    handleChange={this.handleChange}>
                </AddHistoryModal>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="#7374BF"
                    barStyle="light-content" />
                <AppHeader headerText={this.props.navigation.state.params.account.value.name} />
                <View style={contentStyle}>
                    <View style={listViewstyle1}>
                        <Text style={textHeaderStyle}>Current Balance</Text>
                        <NumberFormat
                            value={this.props.navigation.state.params.account.value.balance}
                            displayType={'text'}
                            renderText={value => <Text style={textHeaderStyle}>€ {value}</Text>}
                            decimalSeparator={','}
                            thousandSeparator={'.'} />
                    </View>
                    <Card style={cardStyle}>
                        <View style={listViewstyle}>
                            <Text style={textHeaderStyle2}>Historical Values</Text>
                            <TouchableOpacity onPress={this.pressedBtn}>
                                <Icon name='md-add-circle-outline' size={35} color={'#0DAAB7'}
                                    style={styles.inputIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                data={this.state.historicalValues}
                                renderItem={({ item, index }) =>
                                    <View style={listViewstyle}>
                                        <Text style={textStyle}>{item.date}</Text>
                                        <NumberFormat
                                            value={item.balance}
                                            displayType={'text'}
                                            renderText={value => <Text style={textStyle}>€ {value}</Text>}
                                            decimalSeparator={','}
                                            thousandSeparator={'.'} />
                                    </View>
                                }
                            />
                        </View>
                    </Card>


                </View>

            </ImageBackground>
        );
    }
}

const styles = {
    cardStyle: {
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
    listViewstyle1: {
        paddingBottom: 15,
        marginBottom: 20,
        paddingLeft: 13.5,
        paddingRight: 13.5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    listViewstyle: {
        paddingLeft: 13.5,
        paddingRight: 13.5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        fontWeight: "700",
        textAlign: "left"
    },
    textHeaderStyle2: {
        fontSize: 20,
        color: "#4871FA",
        marginTop: 12.5,
        fontWeight: "700",
        textAlign: "left"
    },
    textStyle: {
        fontSize: 17,
        color: "#525252",
        marginTop: 12.5,
        marginBottom: 12.5
    },
    contentStyle: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputIcon: {
        marginTop: 10
    }
}

export default AccountDetailsScreen;