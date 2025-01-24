import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from './Home';

const prefix = 'pufftown://';
const Stack = createNativeStackNavigator();

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'waypoint',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
