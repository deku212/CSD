import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import LoginForm from './LoginForm';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./Image/logo.png')} />

          <Text style={styles.title}>ECHS user login</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation} />
        </View>
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
