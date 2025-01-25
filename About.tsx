import { useRoute } from '@react-navigation/native';
import Waypoint from '@sky-mavis/waypoint-native';
import { useEffect } from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const waypoint = new Waypoint({
    waypointOrigin: 'https://waypoint.roninchain.com',
    clientId: '0c747b15-3e92-45eb-ae69-1ab32e8b8cbf',
    redirectUri: 'pufftown://waypoint',
    rpcUrl: 'https://api.roninchain.com/rpc',
    chainId: 2020,
});

export const AboutScreen = () => {
    const route = useRoute();

    useEffect(() => {
        if (route.path) {
            waypoint.onResponse(route.path);
        }
    }, [route]);

    const authorize = async () => {
        try {
            // My Question
            // For example,
            // now the route is: Home Page - About - Click Authorize - and then after authorization it redirects to the Account page
            // But what we really want to do is if we authorize at the current page, after the authorization it can also redirect to the current page, but not that one page that was set in the config.screens
            const state = uuidv4();
            const result = await waypoint.authorize(state);
            console.log(JSON.stringify(result));
            Alert.alert('Response', JSON.stringify(result, null, 2));
        } catch (error) {
            Alert.alert('error', JSON.stringify(error, null, 2));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.buttonContainer}>
                    <Text>About</Text>
                    <Button title="Authorize" onPress={authorize} />
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
