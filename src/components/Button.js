import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={props.pressedBtn}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 50
    },
    textStyle: {
        alignSelf: "center",
        color: "#534F62",
        fontSize: 20,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;
