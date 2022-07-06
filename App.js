import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

