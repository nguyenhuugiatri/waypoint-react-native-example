import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import Waypoint from '@sky-mavis/waypoint-native';
import {useEffect} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

const waypoint = new Waypoint({
  waypointOrigin: 'https://waypoint.roninchain.com',
  clientId: '0c747b15-3e92-45eb-ae69-1ab32e8b8cbf',
  redirectUri: 'pufftown://waypoint',
  rpcUrl: 'https://api.roninchain.com/rpc',
  chainId: 2020,
});

export const HomeScreen = () => {
  const route = useRoute();
  const navigation  = useNavigation();

  useEffect(() => {
    if (route.path) {
      waypoint.onResponse(route.path);
    }
  }, [route]);

  const toAbout = () => {
    navigation.navigate('About')
  }

  // const authorize = async () => {
  //   try {
  //     const state = uuidv4();
  //     const result = await waypoint.authorize(state);
  //     console.log(JSON.stringify(result));
  //     Alert.alert('Response', JSON.stringify(result, null, 2));
  //   } catch (error) {
  //     Alert.alert('error', JSON.stringify(error, null, 2));
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.buttonContainer}>
          {/* <Button title="Authorize" onPress={authorize} /> */}
          <Text>Home</Text>
          <Button title="ToAbout" onPress={toAbout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 96,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
    width: '100%',
  },
});
