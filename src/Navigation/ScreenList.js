import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

function ScreenList() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="screen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default ScreenList;
