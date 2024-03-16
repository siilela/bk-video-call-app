import React from 'react'
import MakeCall from './screens/MakeCall';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import about from './screens/About';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MakeCall" component={MakeCall} />
        <Stack.Screen name="About" component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App