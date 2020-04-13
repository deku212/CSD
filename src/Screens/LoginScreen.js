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
            <Image 
              style={styles.logo}
              source={require('./Image/logo.png')} />
        </View>
        <LoginForm />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor : '#3498db',
    alignItems :'center',
    justifyContent :'center' 
  },
  logocontainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 175,
    height: 175
  }
});
