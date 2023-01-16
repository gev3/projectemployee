import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../../screens";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
}


