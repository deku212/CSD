import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenList from './src/Navigation/ScreenList';

const App = () => (
  <NavigationContainer>
    <ScreenList />
  </NavigationContainer>
);

export default App;
