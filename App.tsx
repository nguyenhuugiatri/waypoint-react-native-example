import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from './Home';
import { AboutScreen } from './About';
import { AccountScreen } from './Account';

const prefix = 'pufftown://';
const Stack = createNativeStackNavigator();

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        // Home: '',
        // About: '',
        Account: 'waypoint',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
