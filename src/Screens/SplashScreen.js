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
      setTimeout(() => {
        setInitializing(false);
      }, 2000);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (!initializing) {
    console.log('initialising');
    if (user) {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'Welcome',
            },
          ],
        }),
      );
    } else {
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
    }
  }
  return (
    <React.Fragment>
      <StatusBar translucent={true} backgroundColor={'green'} />
      <View style={splashStyles.flexBack}>
        <Text style={splashStyles.textHeader}>ECHS</Text>
        <Text style={splashStyles.textHeader1}>Appoinment Schedular</Text>
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
