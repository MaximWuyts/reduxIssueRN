import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const { headerStyle, textHeaderStyle, iconStyle } = styles;
        return (
            <View style={headerStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-left" size={25} style={iconStyle} />
                </TouchableOpacity>

                <View>
                    <Text style={textHeaderStyle}>{this.props.headerText}</Text>
                </View>
                <Icon name="ellipsis-h" size={28} style={iconStyle} />
            </View>
        )
    }
}

const styles = {
    headerStyle: {
        height: 50,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',

    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        fontWeight: "700",
        textAlign: "left"
    },
    iconStyle: {
        color: "#fff",
        paddingBottom: 0,
        marginTop: 10,
        paddingLeft: 12.5,
        paddingRight: 12.5
    }
};

export default withNavigation(AppHeader);