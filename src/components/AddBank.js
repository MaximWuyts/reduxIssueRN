import React, { Component } from 'react';
import { View } from 'react-native';
import { Form, Item, Icon, Input, Picker } from 'native-base';

const AddBank = ({ handleChange, name, balance, type, formType }) => {

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Form>
                <Item style={{ marginTop: 40, marginLeft: 0, flexDirection: 'row-reverse' }}>
                    <Icon name='bank' type="FontAwesome" style={{ color: 'white', fontSize: 20 }} />
                    <Input placeholder='Enter Name'
                        placeholderTextColor='#bfc6ea'
                        onChangeText={(text) => handleChange('name', text)}
                        value={name}
                        style={{ color: '#bfc6ea' }}
                    />
                </Item>

                <View style={{ justifyContent: "center", marginTop: 40, width: 390 }}>
                    {formType === "account" ?
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ color: '#bfc6ea' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={type}
                                onValueChange={(value) => handleChange('type', value)}
                            >
                                <Picker.Item label="Select Your Type" value="" />
                                <Picker.Item label="Checking" value="checking" />
                                <Picker.Item label="Saving" value="saving" />
                            </Picker>
                        </Item>
                        :

                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ color: '#bfc6ea' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#fff"
                                selectedValue={type}
                                onValueChange={(value) => handleChange('type', value)}
                            >

                                <Picker.Item label="Select Your Type" value="" />
                                <Picker.Item label="Mortgage" value="mortgage" />
                                <Picker.Item label="Credit Card" value="credit-card" />
                                <Picker.Item label="Personal Loan" value="personal loan" />
                            </Picker>
                        </Item>}
                </View>



                <Item style={{ marginTop: 40, marginLeft: 0, flexDirection: 'row-reverse' }}>
                    <Icon name='euro' type="FontAwesome" style={{ color: 'white', fontSize: 20 }} />
                    <Input placeholder='Enter Balance'
                        placeholderTextColor='#bfc6ea'
                        onChangeText={(text) => handleChange('balance', text)}
                        keyboardType="numeric"
                        value={balance}
                        style={{ color: '#bfc6ea' }}
                    />
                </Item>
            </Form>
        </View>
    );
}


export default AddBank;