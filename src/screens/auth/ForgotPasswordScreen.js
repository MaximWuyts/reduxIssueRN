import React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
        }
    }

    onResetPasswordPress = () => {

    }

    render() {
        const { containerStyle, headerView, buttonStyle, bodyStyle, headerText, textInputStyle, SectionStyle } = styles
        return (
            <ImageBackground source={require('../../assets/blur.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', flex: 1 }}>
                <LinearGradient colors={['rgba(83, 79, 98, 0.6)', 'rgba(17, 16, 20, 0.6)']} style={containerStyle}>
                    <StatusBar
                        translucent={false}
                        animated={false}
                        hidden={true}
                        backgroundColor="rgba(83, 79, 98, 0.8)"
                        barStyle="light-content" />
                    <View style={headerView}>
                        <Text style={headerText}>CashHub</Text>
                    </View>
                    <View style={bodyStyle}>
                        <View style={SectionStyle}>
                            <Icon
                                name="at" size={30}
                                style={{
                                    marginLeft: 5,
                                    padding: 10,
                                    color: "#fff"
                                }}
                            />

                            <TextInput
                                style={textInputStyle}
                                placeholder="User@mail.com"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#fff"
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                            />
                        </View>
                    </View>

                    <View style={buttonStyle}>
                        <Button pressedBtn={this.onResetPasswordPress}>
                            Reset password
                        </Button>
                    </View>
                    <Text onPress={() => { this.props.navigation.navigate("Login") }} style={{
                        textAlign: 'center',
                        fontSize: 17,
                        color: "#fff",
                        marginTop: 10,
                        marginBottom: 70,
                        padding: 10
                    }}>Log In!</Text>
                </LinearGradient>
            </ImageBackground>



        )
    }
}

styles = StyleSheet.create({
    headerView: {
        flex: 2,
        marginTop: 40
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60,
        color: "#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#534F62',
        backgroundColor: 'transparent',
        paddingRight: 38.5,
        paddingLeft: 38.5
    },
    bodyStyle: {
        flex: 1
    },
    SectionStyle: {
        flexDirection: 'row',
        borderBottomColor: "#0DAAB7",
        borderBottomWidth: 1,
        borderColor: '#000',
        height: 60,
        margin: 10,
    },
    textInputStyle: {
        flex: 2,
        marginLeft: 25,
        color: '#fff',
        fontSize: 18
    },
    buttonStyle: {
        marginTop: 110,
        borderRadius: 30
    }
});

export default ForgotPasswordScreen;