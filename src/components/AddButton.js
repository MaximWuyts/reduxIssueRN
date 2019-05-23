import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddButton = props => {
    return (

        <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 100,
        alignSelf: 'stretch',
        backgroundColor: '#0DAAB7',
        alignItems: "center",
        justifyContent: "center",
        height: 60
    },
    textStyle: {

        color: "#fff",
        fontSize: 20,
    }
});

export default AddButton;