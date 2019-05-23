import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { fire } from '../../keys/firebaseKeys';
import { db } from '../../keys/firebaseKeys';
import { Spinner } from '../../components/Spinner';

export class RegistrationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: true,
            pressed: false,
            loading: false,
            email: "",
            password: "",
            passwordConfirm: ""
        };
    }

    showPassword = () => {
        if (!this.state.pressed) {
            this.setState({ showPassword: false, pressed: true })
        }
        else this.setState({ showPassword: true, pressed: false })
    }

    onSignupPress = () => {
        const { email, password, passwordConfirm } = this.state;
        this.setState({ loading: true })
        if (password !== passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((createdUser) => {
                Alert.alert('success!');
                //current registered user
                //saving it to the users table
                db.ref('users').child(createdUser.user.uid).set({
                    name: createdUser.user.displayName,
                    email: createdUser.user.email
                })
                    .then(() => {
                        this.setState({ loading: false })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
                (error) => {
                    Alert.alert(error.message);
                    this.setState({ loading: false })
                });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button pressedBtn={this.onSignupPress}>
                Create Account
            </Button>
        );
    }

    render() {
        const { containerStyle, headerStyle, headerText, textInputStyle, SectionStyle, loginStyle } = styles
        return (
            <ImageBackground source={require('../../assets/blur.jpg')} resizeMode="cover" style={{ width: '100%', height: '100%', flex: 1 }}>
                <LinearGradient colors={['rgba(83, 79, 98, 0.6)', 'rgba(17, 16, 20, 0.6)']} style={containerStyle}>
                    <View style={headerStyle}>
                        <Text style={headerText}>CashHub</Text>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            borderBottomColor: "#0DAAB7",
                            borderBottomWidth: 1,
                            borderColor: '#000',
                            height: 50,
                            marginLeft: 10, marginRight: 10
                        }}>
                            <Icon
                                name="user-circle" size={25}
                                style={{
                                    marginLeft: 5,
                                    padding: 10,
                                    color: "#fff",
                                    marginTop: 5,
                                }}
                            />

                            <TextInput
                                style={textInputStyle}
                                placeholder="First Name"
                                placeholderTextColor="#fff"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={SectionStyle}>
                            <Icon
                                name="user-circle" size={25}
                                style={{
                                    marginLeft: 5,
                                    padding: 10,
                                    color: "#fff",
                                    marginTop: 5,
                                }}
                            />

                            <TextInput
                                style={textInputStyle}
                                placeholder="Last Name"
                                placeholderTextColor="#fff"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={SectionStyle}>
                            <Icon
                                name="at" size={25}
                                style={{
                                    marginLeft: 5,
                                    padding: 10,
                                    color: "#fff",
                                    marginTop: 5,
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
                        <View style={SectionStyle}>
                            <Icon
                                name="lock" size={25}
                                style={{
                                    marginLeft: 9,
                                    marginTop: 5,
                                    padding: 10,
                                    color: "#fff"
                                }}
                            />

                            <TextInput
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                style={textInputStyle}
                                placeholder="Password"
                                secureTextEntry={this.state.showPassword}
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#fff"
                            />
                            <TouchableOpacity onPress={this.showPassword.bind(this)}>
                                <Icon name={this.state.pressed == false ? "eye-slash" : "eye"} size={25} color={"#fff"} style={{ marginTop: 15, marginRight: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={SectionStyle}>
                            <Icon
                                name="lock" size={25}
                                style={{
                                    marginLeft: 9,
                                    marginTop: 5,
                                    padding: 10,
                                    color: "#fff"
                                }}
                            />

                            <TextInput
                                value={this.state.passwordConfirm}
                                onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                                style={textInputStyle}
                                placeholder="Confirm Password"
                                secureTextEntry
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#fff"
                            />
                        </View>
                        <View style={{ marginTop: 50 }}>

                            {this.renderButton()}

                        </View>
                    </View>

                    <View>
                        <Text onPress={() => { this.props.navigation.navigate("Login") }}
                            // only worked with inline style oddly enough
                            style={loginStyle}>Log In!</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {

        flex: 2,
    },
    headerText: {
        marginTop: 40,
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

        paddingRight: 38.5,
        paddingLeft: 38.5
    },
    SectionStyle: {
        flexDirection: 'row',
        borderBottomColor: "#0DAAB7",
        borderBottomWidth: 1,
        borderColor: '#000',
        height: 50,
        margin: 10,
    },
    textInputStyle: {
        flex: 1,
        marginLeft: 25,
        color: '#fff',
        fontSize: 18,

    },
    loginStyle: {
        textAlign: 'center',
        fontSize: 17,
        color: "#fff",
        padding: 10,
        marginBottom: 30,
        marginTop: 20
    }
});

