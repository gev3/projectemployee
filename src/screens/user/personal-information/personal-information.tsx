import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {IStore} from "../../../redux/auth/auth.types";
import {UserForm} from "../../../components";

export const PersonalInformation = ({}) => {
    const user = useSelector((state: IStore) => state.auth.user);


    return (
        <UserForm isProfile={true}/>
    )
}

const styles = StyleSheet.create({})


