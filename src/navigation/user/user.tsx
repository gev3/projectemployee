import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ManageEmployees, PersonalInformation, ProfileScreen} from "../../screens";

const Stack = createNativeStackNavigator();

export function UserNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#fff"},
                }}
            />
            <Stack.Screen
                name="PersonalInformation"
                component={PersonalInformation}
                options={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#fff"},
                }}
            />
            <Stack.Screen
                name="ManageEmployees"
                component={ManageEmployees}
                options={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#fff"},
                }}
            />

        </Stack.Navigator>
    );
}


