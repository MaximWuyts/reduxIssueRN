import React from 'react';
import { View, StatusBar } from 'react-native';
import AppHeader from '../components/AppHeader';
import AddBank from '../components/AddBank';
import AddButton from '../../src/components/AddButton';
import { fire } from '../keys/firebaseKeys';

class AddAccountScreen extends React.Component {

    state = {
        name: undefined,
        balance: undefined,
        type: undefined
    };


    handleChange = (name, event) => {
        this.setState({
            [name]: event
        })
    }

    handleSubmit = (event) => {
        fire.database().ref(`accounts/${this.props.screenProps.user.uid}`).push({
            name: this.state.name,
            balance: this.state.balance,
            type: this.state.type
        }).then(() => {
            this.props.navigation.navigate("Accounts");
        })
    }

    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="#495776"
                    barStyle="light-content" />
                <AppHeader headerText="Add Account" />
                <View style={styles.container}>
                    <AddBank
                        formType="account"
                        handleChange={this.handleChange}
                        name={this.state.name}
                        balance={this.state.balance}
                        type={this.state.type}
                    />
                    <AddButton handleSubmit={this.handleSubmit}>Add Account</AddButton>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#495776'
    }
};

export default AddAccountScreen;