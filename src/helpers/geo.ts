import {Alert, Linking, PermissionsAndroid, Platform, ToastAndroid} from "react-native";
import Geolocation from "react-native-geolocation-service";

export const hasPermissionIOS = async () => {
    const openSetting = () => {
        Linking.openSettings().catch(() => {
            Alert.alert("Unable to open settings");
        });
    };
    const status = await Geolocation.requestAuthorization("whenInUse");

    if (status === "granted") {
        return true;
    }

    if (status === "denied") {
        Alert.alert(
            `Turn on Location Services to allow "${"AGA"}" to determine your location.`,
            "",
            [
                {text: "Go to Settings", onPress: openSetting},
                {
                    text: "Don't Use Location", onPress: () => {
                    }
                }
            ]
        );
    }

    if (status === "disabled") {
        Alert.alert(
            `Turn on Location Services to allow "${"AGA"}" to determine your location.`,
            "",
            [
                {text: "Go to Settings", onPress: openSetting},
                {
                    text: "Don't Use Location", onPress: () => {
                    }
                }
            ]
        );
    }

    return false;
};

export const hasLocationPermission = async () => {
    if (Platform.OS === "ios") {
        return await hasPermissionIOS();
    }

    if (Platform.OS === "android" && Platform.Version < 23) {
        return true;
    }

    const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
            "Location permission denied by user.",
            ToastAndroid.LONG
        );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
            "Location permission revoked by user.",
            ToastAndroid.LONG
        );
    }

    return false;
};


export const handleUpdateCoords = async (setCurrentLocation: Function) => {

    return Geolocation.getCurrentPosition(
        async (position) => {
            const {coords} = position;
            setCurrentLocation({
                lat: coords.latitude,
                lng: coords.longitude
            });
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    );
};
