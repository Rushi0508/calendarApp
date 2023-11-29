/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App(): JSX.Element {

  return (
    <>
      {/* <LoginScreen/> */}
      <HomeScreen/>
    </>
  );
}

export default App;
