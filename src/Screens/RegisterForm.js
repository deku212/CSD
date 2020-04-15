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
import {Value} from 'react-native-reanimated';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }
  register = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={Value => this.setState({name: Value})}
          returnKeyType="next"
          ref={input => (this.namelInput = input)}
          onSubmitEditing={() => this.emailInput.focus()}
          style={styles.input}
        />
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={Value => this.setState({email: Value})}
          returnKeyType="next"
          ref={input => (this.emailInput = input)}
          onSubmitEditing={() => this.echsInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
         <TextInput
          placeholder="ECHS Number"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={Value => this.setState({echs: Value})}
          returnKeyType="next"
          ref={input => (this.echsInput = input)}
          onSubmitEditing={() => this.passwordInput.focus()}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={Value => this.setState({password: Value})}
          returnKeyType="next"
          ref={input => (this.passwordInput = input)}
          onSubmitEditing={() => this.repasswordInput.focus()}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Retype password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onChangeText={Value => this.setState({password: Value})}
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={input => (this.repasswordInput = input)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.userButton} onPress={this.register}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    paddingTop: 200,
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 30,
    color: '#FFF',
    paddingHorizontal: 20,
    fontSize: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    width: 200,

  },
  userButton: {
    backgroundColor: '#1B1464',
    padding: 15,
    paddingHorizontal: 20,
    width: 200
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
