import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberFormat from 'react-number-format';


class AccountHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { headerStyle, textHeaderStyle } = styles
        let newTotalNetWorth = parseFloat(this.props.totalNetWorth).toFixed(0)
        return (
            <View style={headerStyle}>
                <Text style={textHeaderStyle}>Total Net Worth</Text>
                <NumberFormat
                    value={newTotalNetWorth}
                    displayType={'text'}
                    renderText={value => <Text style={textHeaderStyle}>€ {value}</Text>}
                    decimalSeparator={','}
                    thousandSeparator={'.'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        height: 50,
        paddingBottom: 10,
        paddingLeft: 38.5,
        paddingRight: 38.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "transparent",
        elevation: 10,
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        fontWeight: "700",
        textAlign: "left"
    },
});

export default AccountHeader;