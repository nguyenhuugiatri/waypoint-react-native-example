import Waypoint from '@sky-mavis/waypoint-native';

export const waypoint = new Waypoint({
    waypointOrigin: 'https://waypoint.roninchain.com',
    clientId: '0c747b15-3e92-45eb-ae69-1ab32e8b8cbf',
    redirectUri: 'pufftown://', // Note: Add `pufftown://` to Redirect URI Waypoint's configuration on https://developers.skymavis.com/console/id-service/
    rpcUrl: 'https://api.roninchain.com/rpc',
    chainId: 2020,
});
