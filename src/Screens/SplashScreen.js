/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar translucent={true} backgroundColor={'green'} />
        <View style={splashStyles.flexBack}>
          <Text style={splashStyles.textHeader}> CSD Inventory </Text>
          <Text style={splashStyles.textHeader}>Management</Text>
          <Text style={splashStyles.textSubHeader}>
            {' '}
            An App for defence personal and their Families
          </Text>
          <View style={{marginTop: 40}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const splashStyles = StyleSheet.create({
  flexBack: {
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
  },
  textSubHeader: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
  },
});
