import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "../auth/auth";
import { useSelector } from "react-redux";


const Navigation = () => {
  // const token = useSelector((state) => state.auth.token);
  const token = false;


  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {/*{token ? <UserNavigation /> : <AuthNavigation />}*/}
        <AuthNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
