/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export function SplashScreen(props) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    console.log('user', user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (!initializing) {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Login', 
            },
          ],
        }),
      );
    }, 2000);
  }
  return (
    <React.Fragment>
      <StatusBar translucent={true} backgroundColor={'green'} />
      <View style={splashStyles.flexBack}>
        <Text style={splashStyles.textHeader}>CSD</Text>
        <Text style={splashStyles.textHeader1}>Inventory Management</Text>
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
    fontSize: 50,
  },
  textHeader1: {
    color: 'white',
    fontSize: 30,
  },
  textSubHeader: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
  },
});
