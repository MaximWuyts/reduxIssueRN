import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { fire } from '../keys/firebaseKeys';

class AddHistoryModal extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    showAddModal = () => {
        this.refs.addHistoryModal.open();
    }



    render = () => {
        return (
            <Modal
                coverScreen={true}
                style={styles.contentContainer}
                ref={"addHistoryModal"}
                position="center"
                backdrop={true}
                // backdropColor="transparent"
                animationDuration={200}
                backdropPressToClose
            >
                <TextInput
                    onChangeText={(text) => this.props.handleChange('balance', text)}
                    style={styles.textInputStyle}
                    placeholder="Add New Balance"
                    keyboardType="numeric"
                >
                </TextInput>

                <Button
                    onPress={this.props.addBalanceFunction}
                    style={{ fontSize: 18, color: "white" }}
                    containerStyle={{
                        padding: 8,
                        marginTop: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: "#0DAAB7"
                    }}
                >
                    Save
                </Button>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        borderRadius: 20,
        shadowRadius: 20,
        elevation: 999,
        width: 375,
        height: 150,
        justifyContent: "center"
    },
    textInputStyle: {
        height: 40,
        fontSize: 18,
        borderBottomColor: "#0DAAB7",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    }

});

export default AddHistoryModal;