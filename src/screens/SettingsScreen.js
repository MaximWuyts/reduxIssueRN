import React from 'react';
import { Text, View, Alert, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { fire } from '../keys/firebaseKeys';

class SettingsScreen extends React.Component {

    onSignOutPress = () => {
        fire.auth().signOut()
            .then(() => { Alert.alert('Goodbye!') }, (error) => { Alert.alert(error.message); });
    }

    render = () => {
        const { container, contentStyle, textStyle, secondStyle } = styles
        return (
            <ImageBackground source={require('../assets/backgroudn.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="#7374BF"
                    barStyle="light-content" />
                <AppHeader headerText="Settings" />
                <View style={container}>
                    <View style={contentStyle}>
                        <TouchableOpacity>
                            <Text
                                onPress={() => { this.props.navigation.navigate("AddAccount") }}
                                style={textStyle}>New Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                onPress={this.onSignOutPress}
                                style={textStyle}>
                                Log Out!
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={secondStyle}>
                        <TouchableOpacity>
                            <Text
                                onPress={() => { this.props.navigation.navigate("AddInvestment") }}
                                style={textStyle}>New Investment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                onPress={() => { this.props.navigation.navigate("AddDebt") }}
                                style={textStyle}>New Debt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                onPress={() => { this.props.navigation.navigate("AddAsset") }}
                                style={textStyle}>New Assets</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>

        )
    }
}

const styles = {
    container: {
        paddingLeft: 25,
        paddingRight: 25,
        flex: 1,
    },

    contentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15

    },
    textStyle: {

        fontSize: 17,
        color: "#fff",
        padding: 10,
        marginTop: 0
    }
};

export default SettingsScreen;