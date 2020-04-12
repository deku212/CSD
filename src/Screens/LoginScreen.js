import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar translucent={true} backgroundColor={'white'} />
        <Text> LoginScreen </Text>
      </View>
    );
  }
}
