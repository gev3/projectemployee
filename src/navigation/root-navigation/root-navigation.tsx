import React from "react";
import {SafeAreaView} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {AuthNavigation} from "../auth/auth";
import {useSelector} from "react-redux";
import {IStore} from "../../redux/auth/auth.types";
import {UserNavigation} from "../user/user";


const Navigation = () => {
    const token = useSelector((state: IStore) => state.auth.token);


    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                {token ? <UserNavigation/> : <AuthNavigation/>}
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default Navigation;
