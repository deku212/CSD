import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                placeholder="Username or Email"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 20
    },
    buttonContainer: {
        backgroundColor: '#1B1464',
        paddingVertical: 15 
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
}); 