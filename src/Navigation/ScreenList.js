import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import {SplashScreen} from '../Screens/SplashScreen';
import RegisterForm from '../Screens/RegisterForm';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function ScreenList() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="screen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default ScreenList;
