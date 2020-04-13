import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> LoginScreen </Text>
        <Button title="Login" onPress/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor : '#fff',
    alignItems :'center',
    justifyContent :'center' 
  },
});
