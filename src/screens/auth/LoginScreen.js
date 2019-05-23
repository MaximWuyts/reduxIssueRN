import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Dimensions, StatusBar, Alert, ImageBackground } from 'react-native';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';
import { Spinner } from '../../components/Spinner';
import { Card } from 'native-base'

const { width: WIDTH } = Dimensions.get('window');

export class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: true,
            pressed: false,
            email: "",
            password: "",
            loading: false
        }
    }

    showPassword = () => {
        if (!this.state.pressed) {
            this.setState({ showPassword: false, pressed: true })
        }
        else this.setState({ showPassword: true, pressed: false })
    }

    onLoginPress = () => {
        const { email, password } = this.state;
        this.setState({ loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Welcome back!')
                this.setState({ loading: false })
            }, (error) => {
                Alert.alert(error.message);
                this.setState({ loading: false })
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <TouchableOpacity
                onPress={this.onLoginPress}
                style={styles.btnLogin}>
                <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { containerStyle, headerView, buttonStyle, backgroundContainer, headerText, textInputStyle, SectionStyle } = styles
        return (

            <ImageBackground source={require('../../assets/backgroudn.png')} resizeMode="cover" style={{ width: '100%', height: '100%' }} style={backgroundContainer}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={true}
                    backgroundColor="rgba(83, 79, 98, 0.8)"
                    barStyle="light-content" />
                <View style={{
                    paddingLeft: 30,
                    paddingRight: 30,
                }}>
                    <View style={headerView}>
                        <Text style={headerText}>CashHub</Text>
                    </View>

                    <Card style={{
                        borderRadius: 25, height: 175, width: WIDTH - 25
                    }}>
                        <View style={styles.inputContainer}>
                            <Icon name='md-mail' size={30} color={'#fff'}
                                style={styles.inputIcon}
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'user@mail.com'}
                                value={this.state.email}
                                placeholderTextColor={'rgba(255,255,255,0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => { this.setState({ email: text }) }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Icon name='md-lock' size={32} color={'#fff'}
                                style={styles.lockIcon}
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'password'}
                                secureTextEntry={this.state.showPassword}
                                value={this.state.password}
                                placeholderTextColor={'rgba(255,255,255,0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => { this.setState({ password: text }) }}
                            />
                            <TouchableOpacity onPress={this.showPassword} style={styles.btnEye}>
                                <Icon name={this.state.pressed == false ? "md-eye-off" : "md-eye"} size={25} color={"#fff"} />
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>

                {this.renderButton()}



                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("ForgotPass") }}
                    style={{ marginTop: 20 }}>
                    <Text style={styles.textStyle2}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("Registration") }}
                    style={{ marginTop: 20 }}>
                    <Text style={styles.textStyle2}>New Here?</Text>
                </TouchableOpacity>


            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    headerView: {
        marginTop: 40,
        marginBottom: 100
    },
    headerText: {
        textAlign: 'center',
        fontSize: 60,
        color: "#fff",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    backgroundContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#348AC7",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        marginTop: 25,

    },
    inputStyle: {
        width: WIDTH - 75,
        height: 50,
        borderRadius: 30,
        fontSize: 18,
        paddingLeft: 75,
        backgroundColor: '#7474BF',
        marginHorizontal: 25,
        color: "#fff"
    },
    inputIcon: {
        zIndex: +1,
        position: 'absolute',
        top: 11,
        left: 50,

    },
    lockIcon: {
        zIndex: +1,
        position: 'absolute',
        top: 8,
        left: 53
    },
    btnEye: {
        position: 'absolute',
        top: 13,
        right: 50,
        opacity: 0.6
    },
    btnLogin: {
        width: WIDTH - 30,
        height: 50,
        borderRadius: 20,
        marginTop: 60,
        backgroundColor: '#7474BF',
        borderWidth: 0.7,
        borderColor: "#fff"
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    },
    textStyle2: {
        color: '#7474BF',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    }
});

