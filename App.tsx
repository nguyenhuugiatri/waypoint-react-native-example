import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { HomeScreen } from './Home';
import { AboutScreen } from './About';
import { AccountScreen } from './Account';
import { Linking } from 'react-native';
import { waypoint } from './waypoint';

const prefix = 'pufftown://';
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const handleDeepLink = async (event) => {
      waypoint.onResponse(event.url);
    };

    const unsubscribe = Linking.addEventListener('url', handleDeepLink);

    return () => {
      unsubscribe.remove();
    };
  }, []);

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
