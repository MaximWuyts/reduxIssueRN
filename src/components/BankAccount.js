import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import NumberFormat from 'react-number-format';

class BankAccount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { account } = this.props;
        const { listViewstyle, textStyle } = styles
        return (
            <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('AccountDetails', { account: account })}
            >
                <View style={listViewstyle}>
                    <Text style={textStyle}> {account.value.name}</Text>
                    <NumberFormat
                        value={account.value.balance}
                        displayType={'text'}
                        renderText={value => <Text style={textStyle}>€ {value}</Text>}
                        decimalSeparator={','}
                        thousandSeparator={'.'} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listViewstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    textStyle: {
        fontSize: 17,
        color: "#525252",
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
});

export default withNavigation(BankAccount);