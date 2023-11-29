import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import ModalScreen from './screens/ModalScreen';
import MeetingScreen from './screens/MeetingScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Logn" component={LoginScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: "modal"}}>
              <Stack.Screen name="Modal" component={ModalScreen}/>
              <Stack.Screen name="Meeting" component={MeetingScreen}/>
            </Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
      }
    </Stack.Navigator>
  )
}

export default StackNavigator