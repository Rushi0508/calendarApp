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
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

function App(): JSX.Element {

  return (
    <>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </>
  );
}

export default App;
