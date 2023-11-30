import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import ModalScreen from './screens/ModalScreen';
import MeetingScreen from './screens/MeetingScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation: "modal"}}>
              <Stack.Screen name="Modal" component={ModalScreen}/>
              <Stack.Screen name="Meeting" component={MeetingScreen}/>
            </Stack.Group>
          </>
      }
    </Stack.Navigator>
  )
}

export default StackNavigator