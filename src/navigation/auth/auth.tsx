import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { FirstStepRegister, SecondStepRegister} from "../../screens";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FirstRegisterScreen"
                component={FirstStepRegister}
                options={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#fff"},
                }}
            />
            <Stack.Screen
                name="SecondRegisterScreen"
                component={SecondStepRegister}
                options={{
                    headerShown: false,
                    contentStyle: {backgroundColor: "#fff"},
                }}
            />
        </Stack.Navigator>
    );
}


