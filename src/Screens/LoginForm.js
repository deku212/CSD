import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  login = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User has logged in successfully');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
        }
        console.error(error);
      });
  };
  register = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('Null Value');
      })
      .catch(error => {
        console.log('Null Value');
      });
  };
  render() {
    console.log("render")
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={value => this.setState({email: value})}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={value => this.setState({password: value})}
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={input => (this.passwordInput = input)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.userButton} onPress={this.login}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    width: 300,
  },
  userButton: {
    backgroundColor: '#1B1464',
    padding: 15,
    paddingHorizontal: 20,
    width: 135,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
