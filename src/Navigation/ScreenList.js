import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import {SplashScreen} from '../Screens/SplashScreen';
import RegisterForm from '../Screens/RegisterForm';
const Stack = createStackNavigator();

function ScreenList() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="screen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default ScreenList;
