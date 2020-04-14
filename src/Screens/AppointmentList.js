import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
                <TextInput 
                placeholder="Select Date"
                placeholderTextColor='rgba(255,255,255,0.7)'
                onChangeText={(Value)=>this.setState({date:Value})}
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
                onChangeText={(Value)=>this.setState({password:Value})}
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.userButton} 
                    onPress ={this.login} >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userButton}
                    onPress ={this.props.navigation.navigate('Register')} >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
              <Text style={styles.title}>CSD Demand Store</Text>
      </View>
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
  logocontainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  title: {
    color: '#1B1464',
    width: 200,
    height: 25,
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.7,
  },
  formContainer: {
    flex: 1,
  },
});
